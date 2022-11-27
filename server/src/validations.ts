import { body } from 'express-validator'

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть больше 8 символов').isLength({ min: 8 }),
    body('nickname', 'Логин должен содержать от 3 до 10 символов').isLength({ min: 3, max: 10 }),
]

export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть больше 8 символов').isLength({ min: 8 }),
]

export const taskCreateValidation = [
    body('title', 'Заголовок должен быть не больше 50 символов').isLength({ max: 50 }).notEmpty(),
    body('description', 'Описание должно быть не больше 100 символов')
        .optional({ checkFalsy: true })
        .isLength({ max: 100 }),
    body('done', 'Тип должен быть Boolean').isBoolean(),
    body('archived', 'Тип должен быть Boolean').isBoolean(),
]
