import type { FastifyInstance } from "fastify";
import multer from "multer";


export function routers(fastify: FastifyInstance) {
    fastify.get("/opa", (req: any, rep: any): any => {
        return rep.send("teste")
    })

    fastify.post('/image', multer(Config Virá pra ca).single("files"), (req:any, rep:any)=>{
        
    })
}