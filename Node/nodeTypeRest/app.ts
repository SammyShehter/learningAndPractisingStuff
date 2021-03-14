import express from 'express'
import * as http from 'http'

import * as winston from 'winston'
import * as expressWinston from 'express-winston'
import cors from 'cors'
import {CommonRoutesConfig} from './common/common.routes.config'
import {UsersRoutes} from './users/users.routes.config'
import debug from 'debug'


const app: express.Application = express()
const server: http.Server = http.createServer(app)
const port : Number = 3000
const routes: Array<CommonRoutesConfig> = []
const debugLog: debug.IDebugger = debug('app')

app.use(cors())

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.cli()
    ),
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
      msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
      expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
      colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
      ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
}))

routes.push(new UsersRoutes(app))

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}))

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server up and running!`)
})

server.listen(port, () => {
    debugLog(`Server running at port ${port}`)
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`)
    })
})