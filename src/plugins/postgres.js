import fp from 'fastify-plugin';
import fastifyPostgres from 'fastify-postgres';

async function postgres(fastify) {
    fastify.register(fastifyPostgres, {
        connectionString: 'postgres://harsh:root@1234@localhost:5432/test',
    });
}

export default fp(postgres);
