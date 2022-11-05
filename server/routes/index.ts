import { Request, Response, Router } from 'express'
import TaskModel from '../models/Task'
const router = Router()

router.get('/tasks', async (req: Request, res: Response) => {
    const tasks = await TaskModel.find()

    res.json(tasks)
})
router.post('/tasks', async (req: Request, res: Response) => {
    const { title, description, done, archived } = req.body

    const task = new TaskModel({ title, description, done, archived })

    await task.save()

    res.json(task)
})
router.get('/tasks/:id', async (req: Request, res: Response) => {
    try {
        const task = await TaskModel.findById(req.params.id)

        if (!task) {
            res.status(404).json({ message: 'task not found' })
        }
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.delete('/tasks/:id', async (req: Request, res: Response) => {
    try {
        const task = await TaskModel.findByIdAndDelete(req.params.id)

        if (!task) {
            res.status(404).json({ message: 'task not found' })
        }

        res.json(task)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.put('/tasks/:id', async (req: Request, res: Response) => {
    try {
        const updatedTask = await TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!updatedTask) {
            res.status(404).json({ message: 'task not found' })
        }

        res.json(updatedTask)
    } catch (error) {
        res.status(500).send(error)
    }
})

export default router
