import { Router } from 'express'
import * as TaskController from '../controllers/taskController'
import { taskCreateValidation } from '../validations'
import checkAuth from '../common/checkAuth'
import handleValidationErrors from '../common/handleValidationErrors'

const router = Router()

router.get('/tasks', checkAuth, TaskController.getAll)
router.post(
    '/tasks',
    checkAuth,
    taskCreateValidation,
    handleValidationErrors,
    TaskController.create,
)
router.get('/tasks/:id', checkAuth, TaskController.getOne)
router.delete('/tasks/:id', checkAuth, TaskController.remove)
router.put(
    '/tasks/:id',
    checkAuth,
    taskCreateValidation,
    handleValidationErrors,
    TaskController.update,
)

export default router
