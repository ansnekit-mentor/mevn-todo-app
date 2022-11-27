import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const secret = process.env.SECRET ?? 'secret'

export default (req: Request, res: Response, next: NextFunction) => {
    const headerAuth = req.headers.authorization ?? ''
    const token = headerAuth.replace(/Bearer\s?/, '')

    if (headerAuth) {
        jwt.verify(token, secret, (err, payload) => {
            if (err) {
                return res.status(403).json({ message: 'Нет доступа' })
            } else if (payload) {
                req.userId = typeof payload === 'string' ? payload : payload?._id
                next()
            }
        })
    } else {
        return res.status(403).json({ message: 'Нет доступа' })
    }
}
