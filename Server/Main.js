const fastify = require('fastify')({ logger: true })
const routes = require('./Routes/routes.js');
const path = require('path');

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '../dist')

  })
fastify.get('/', async (request, reply) => {
    reply.sendFile('index.html')
})




routes.forEach(item => fastify.route(item))

const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()