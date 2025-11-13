import type { FastifyInstance } from "fastify";
import { controllerUSer, controllerSessionUser } from "../../main.js";


export function publcRouters(fastify: FastifyInstance) {

    fastify.post("/register", controllerUSer.Register)

    fastify.post("/session", controllerSessionUser.Login)
}
