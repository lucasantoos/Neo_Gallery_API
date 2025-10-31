import type { FastifyInstance } from "fastify";
import multer from "fastify-multer";
import configMulter from "../../config/fileconfigs/multer.js"
import { imagemController } from "../../main.js";

export function routers(fastify: FastifyInstance) {

    const upload = multer(configMulter)

    fastify.get("/opa", (req: any, rep: any): any => {
        return rep.send("teste")
    })

    fastify.post('/image', { preHandler: upload.single("file") }, imagemController.Image)
}