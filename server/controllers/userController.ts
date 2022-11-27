import { Request, Response, Router, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import UserModel from '../models/User'

const secret = process.env.SECRET ?? 'secret'

export const login = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email })

        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' })
        }

        if (user) {
            const isValidPass = await bcrypt.compare(req.body.password, user?.password)

            if (!isValidPass) {
                return res.status(400).json({ message: 'Неверный логин или пароль' })
            }
            const token = jwt.sign(
                {
                    _id: user._id,
                },
                secret,
                {
                    expiresIn: '1d',
                },
            )

            return res.json({
                success: true,
                token,
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Не удалось авторизоваться' })
    }
}
export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }

        const pass = req.body.password
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(pass, salt)

        const user = new UserModel({
            email: req.body.email,
            password: passwordHash,
            nickname: req.body.nickname,
        })

        user.save()

        const token = jwt.sign(
            {
                _id: user._id,
            },
            'secret',
            {
                expiresIn: '1d',
            },
        )

        res.json({
            token,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Не удалось зарегистрироваться' })
    }
}
export const getMe = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.userId)

        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' })
        }

        const { _id, email, nickname } = user

        return res.json({ _id, email, nickname })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Нет доступа' })
    }
}
