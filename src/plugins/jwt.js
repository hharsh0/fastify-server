import fp from 'fastify-plugin';
import fastifyJwt from 'fastify-jwt';

async function jwt(fastify) {
    fastify.register(fastifyJwt, {
        secret: 'supersecret',
    });

    fastify.decorate('authenticate', async function (request, reply) {
        try {
            await request.jwtVerify();
        } catch (err) {
            reply.send(err);
        }
    });
}

export default fp(jwt);
