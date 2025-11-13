import crypto from 'crypto';
import multer from 'fastify-multer';
import path from 'path';
import { fileURLToPath } from 'url';
import multerS3 from 'multer-s3';
import aws from '@aws-sdk/client-s3';

const CurrentPath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(CurrentPath);

const DestinationPath = {
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', '..', 'uploads', 'arquivos'));
    },
    filename(req:any, file:any, callback) { 
      crypto.randomBytes(16, (err, hash) => {
        if (err) return callback(err);
        const ext = path.extname(file.originalname);
        file.key = `${hash.toString("hex")}-${Date.now()}${ext}`;
        callback(null, file.key);
      });
    },
  }),

  S3: multerS3({
    s3: new aws.S3() as any,
    bucket: "meu-album-online",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key:(req:any, file:any, callback)=>{
      crypto.randomBytes(16, (err, hash) => {
        if (err) return callback(err);
        const ext = path.extname(file.originalname);
        const filename = `${hash.toString("hex")}-${Date.now()}${ext}`;
        callback(null, filename);
      });
    },
  }),
};

export default {
  dest: path.resolve(__dirname, '..', '..', 'uploads', 'arquivos'),
  storage: DestinationPath['S3'],
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req:any, file:any, cb:any) => {
    const allowedMimetypes = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
    if (allowedMimetypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("invalid file type"));
    }
  },
};
