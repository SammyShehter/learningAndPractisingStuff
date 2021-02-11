import {CommonRoutesConfig} from '../common/common.routes.config'
import express from 'express'


export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes')
    }

    configureRoutes() {
        this.app.route('/users')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('List of users')
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send('Post to user')
            })

        this.app.route(`/users/:userId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next()
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).set(`GET requested for id ${req.params.userId}`)
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).set(`POST requested for id ${req.params.userId}`)
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).set(`PATCH requested for id ${req.params.userId}`)
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).set(`DELETE requested for id ${req.params.userId}`)
            })

        return this.app
    }
}