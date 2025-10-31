import crypto from 'crypto'
import multer from 'fastify-multer'
import path from "path"
import { fileURLToPath } from 'url'


const CurrentPath: string = fileURLToPath(import.meta.url)
const __dirname = path.dirname(CurrentPath);
export default {
    dest: path.resolve(__dirname, '..', '..', 'uploads', 'arquivos'),
    storage: multer.diskStorage({
        destination(req: any, file: any, callback: any) {
            callback(null, path.resolve(__dirname, '..', '..', 'uploads', 'arquivos'))
        },
        filename(req: any, file: any, callback: any) {
            crypto.randomBytes(16, (err: any, hash: any) => {
                if (err) callback(err)
                const ext = path.extname(file.originalname)
                const fildname = `${hash.toString("hex")} - ${Date.now()}${ext}`

                callback(null, fildname)
            })
        },
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req: any, file: any, cb: any) => {
        const allowedMimetypes = [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/gif"
        ]

        if (allowedMimetypes.includes(file.mimetype)) {
            cb(null, true)
        }
        else {
            cb(new Error("invalid file type"))
        }
    },


}