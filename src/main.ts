import { fastify } from 'fastify'
import formbody from '@fastify/formbody'
import { routers } from './infra/routers/servers.js'
import fastifyMultipart from '@fastify/multipart'
import { ImagemRepository } from './config/repository/Imagem.repository.js'
import prismaRepo from './config/database/prisma.js'
import { ImageService } from './application/use-case/imagem.service.js'
import { ImageController } from './application/controller/image.controller.js'
import { UserRepository } from './config/repository/user.repository.js'
import { UserService } from './application/use-case/use.create.service.js'
import { RegisterUserController } from './application/controller/user.controller.register.js'
import { UserSessionController } from './application/controller/user.controller.session.js'
import { LoginUser } from './application/use-case/use.login.service.js'

const PORT: number = 3000
const app = fastify()
app.register(fastifyMultipart)
app.register(formbody)
app.register(routers)


//Config dependencias da rota de imagem

const repositoryImagem = new ImagemRepository(prismaRepo)
const imagemservice = new ImageService(repositoryImagem)
const imagemController = new ImageController(imagemservice)

//Config dependences router of register
const repositoryUser = new UserRepository(prismaRepo)
const serviceUserCreate = new UserService(repositoryUser)
const controllerUSer = new RegisterUserController(serviceUserCreate)

//dependences router of session
const loginUser = new LoginUser(repositoryUser)
const controllerSessionUser = new UserSessionController(loginUser)

//export dependence for routers main

export { imagemController, controllerUSer, controllerSessionUser }


app.listen({ port: PORT }).then(() => {
    console.log(`Server running in the port: ${PORT}`)
})


