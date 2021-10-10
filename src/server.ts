import express from 'express'
import cors from 'cors'
import compression from 'compression'
import {createServer} from 'http';
import { ApolloServer } from 'apollo-server-express'
import expressPlayground from 'graphql-playground-middleware-express'
import { schema } from './graphql'
import Database from './database'
import config from './config'

async function init() {

    const port = config.port || 3000
    const app = express()

    app.use(cors())

    app.use(compression())

    const database = async () => {
        return new Database().connect()
    }

    const server = new ApolloServer({
        schema,
        introspection: true,
        context: database
    })

    await server.start()

    server.applyMiddleware({
        app
    })

    app.get('/', expressPlayground({
        endpoint: '/graphql'
    }))

    const httpServer = createServer(app)

    httpServer.listen({
        port: port,
    }, () => {
        console.log(`Listening on http://localhost:${port}`)
    })
}

init().then(result =>  console.log(`INIT`) )