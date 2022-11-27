import { Router } from 'express'
import { registerValidation, loginValidation } from '../validations'
import checkAuth from '../common/checkAuth'
import * as UserController from '../controllers/userController'
import handleValidationErrors from '../common/handleValidationErrors'

const router = Router()

router.post('/register', registerValidation, handleValidationErrors, UserController.register)
router.post('/login', loginValidation, handleValidationErrors, UserController.login)
router.get('/me', checkAuth, UserController.getMe)

export default router
