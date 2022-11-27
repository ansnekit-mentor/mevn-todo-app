import { Router } from 'express'
import { registerValidation } from '../validations/auth'
import checkAuth from '../common/checkAuth'
import * as UserController from '../controllers/userController'

const router = Router()

router.post('/register', registerValidation, UserController.register)
router.post('/login', UserController.login)
router.get('/me', checkAuth, UserController.getMe)

export default router
