import { Elysia } from 'elysia'

const app = new Elysia().get('/', () => 'Player Service is running').listen(3003)

console.log(`👤 Player Service is running at ${app.server?.hostname}:${app.server?.port}`)
