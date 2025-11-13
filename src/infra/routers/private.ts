import type { FastifyInstance } from "fastify";
import multer from "fastify-multer";
import configMulter from "../../config/fileconfigs/multer.js"
import { auth, controllerSessionUser, controllerUSer, imagemController } from "../../main.js";

export function routersPrivates(fastify: FastifyInstance) {

    fastify.addHook("onRequest", auth.Validation)
    const upload = multer(configMulter as any)

    fastify.get("/opa", (req: any, rep: any): any => {
        return rep.send("teste")
    })

    fastify.post('/image', { preHandler: upload.single("file") }, imagemController.Image)


}