import { body } from 'express-validator'

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть больше 8 символов').isLength({ min: 8 }),
    body('nickname', 'Логин должен содержать от 3 до 10 символов').isLength({ min: 3, max: 10 }),
]
