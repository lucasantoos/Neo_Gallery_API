import { fastify } from 'fastify'
import formbody from '@fastify/formbody'
import { routers } from './infra/routers/servers.js'
import fastifyMultipart from '@fastify/multipart'
import { ImagemRepository } from './config/repository/Imagem.repository.js'
import prismaRepo from './config/database/prisma.js'
import { ImageService } from './application/use-case/imagem.service.js'
import { ImageController } from './application/controller/image.controller.js'

const PORT: number = 3000
const app = fastify()
app.register(fastifyMultipart)
app.register(formbody)
app.register(routers)

//Config dependencias da rota de imagem

const repositoryImagem = new ImagemRepository(prismaRepo)
const imagemservice = new ImageService(repositoryImagem)
const imagemController = new ImageController(imagemservice)


//export dependence for routers main

export { imagemController}


app.listen({ port: PORT }).then(() => {
    console.log(`Server running in the port: ${PORT}`)
})


