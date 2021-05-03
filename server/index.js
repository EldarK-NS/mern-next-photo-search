const express = require('express')
const next = require('next')
const cors = require('cors')
require('dotenv').config()
const connect = require('./model/connect')
const bodyParser = require('body-parser').json()

const PORT = process.env.PORT || 3000

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express()
        const routes = require('./routes/index.js')
        const authRouter = require('./routes/auth-router.js')
        const itemRouter = require('./routes/item-router.js')

        server.use(cors())
        server.use('/api', routes(server))
        server.use('/api/auth', bodyParser, authRouter(server))
        server.use('/api/favorite', bodyParser, itemRouter(server))

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        connect();


        server.listen(PORT, err => {
            if (err) throw err;
            console.log((`>_ Ready on ${PORT}`))
        })
    })
    .catch(error => {
        console.log(error)
        process.exit(1)
    })



