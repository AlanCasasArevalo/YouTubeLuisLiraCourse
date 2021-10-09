import express from 'express'
import cors from 'cors'
import compression from 'compression'
import {createServer} from 'http';
import { ApolloServer } from 'apollo-server-express'

import expressPlayground from 'graphql-playground-middleware-express'

import { schema } from './graphql'

async function init() {

    const port = process.env.PORT || 3000
    const app = express()

    app.use(cors())

    app.use(compression())

    const server = new ApolloServer({
        schema,
        introspection: true
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