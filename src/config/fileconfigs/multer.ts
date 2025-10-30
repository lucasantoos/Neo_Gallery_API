import crypto, { hash } from 'crypto'
import multer from 'multer'
import path from "path"
import { fileURLToPath } from 'url'


const CurrentPath: string = fileURLToPath(import.meta.url)

export default {
    dest: path.resolve(CurrentPath, '..', '..', '..', 'uploads', 'arquivos'),
    storage: multer.diskStorage({
        destination(req:any, file:any, callback:any) {
            callback(null, path.resolve(CurrentPath, '..', '..', '..', 'uploads', 'arquivos'))
        },
        filename(req:any, file:any, callback:any) {
            crypto.randomBytes(16, (err: any, hash:any)=>{
                if(err) callback(err)

                const filename = `${hash.toString("hex")} - ${new Date()}`

                callback(null, filename)
            })
        },
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter:(req:any, file: any, cb:any)=>{
        const allowedMimetypes = {}
    }
     
}