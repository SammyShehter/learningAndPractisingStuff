import express from "express";
import usersService from '../services/users.service';

class UsersMiddleware {
    async validateRequiredUserBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body && req.body.email && req.body.password) {
            next()
        } else {
            res.status(400).send({error: `Missing required fields: email and/or password`})
        }
    }

    async validateSameEmailDoesntExist(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await usersService.getByEmail(req.body.email)
        if (user) {
            res.status(400).send({error: `User email already in use`})
        } else {
            next()
        }
    }

    async validateSameEmailBelongToSameUser(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await usersService.getByEmail(req.body.email)
        if (user && user.id === req.params.userId) {
            next()
        } else {
            res.status(400).send({error: `Invalid email`})
        }
    }

    validatePatchEmail = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (req.body.email) {
            await this.validateSameEmailBelongToSameUser(req, res, next)
        } else {
            next()
        }
    }
}

export default new UsersMiddleware()