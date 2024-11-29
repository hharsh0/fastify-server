import Fastify from "fastify";
import postgres from "./src/plugins/postgres";
import jwt from "./src/plugins/jwt";
import authRoutes from "./src/routes/auth";
import securedRoutes from "./src/routes/secure";

const app = Fastify({
    logger: true
})  

app.register(postgres);
app.register(jwt);
app.register(authRoutes, { prefix: '/auth' });
app.register(securedRoutes, { prefix: '/api' });

app.get('/', (request, reply)=>{
    reply.send({message: "Hello world!"});
})

app.get('/healthcheck', (request, reply)=>{
    reply.send({status: "UP", message: "Server is up and running!"});
})

const start = async () =>{
    try{
        await app.ready();
        await app.listen({port: 3000})
    }catch(err){
        app.log.error(err);
        process.exit(1);
    }
}

start();
