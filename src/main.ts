import { fastify } from 'fastify'
import formbody from '@fastify/formbody'
import { routers } from './infra/routers/servers.js'

const PORT: number = 3000
const app = fastify()
app.register(formbody)
app.register(routers)


app.listen({ port: PORT }).then(() => {
    console.log(`Server running in the port: ${PORT}`)
})