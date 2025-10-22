import type { FastifyInstance } from "fastify";
import type { ReplyDefault } from "fastify/types/utils.js";


export function routers(fastify: FastifyInstance) {
    fastify.get("/opa", (req: any, rep: any): any => {
        return rep.send("teste")
    })
}