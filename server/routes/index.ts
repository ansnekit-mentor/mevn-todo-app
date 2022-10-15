import { Request, Response, Router } from 'express'
import Task from '../models/Task'
const router = Router()

router.get('/tasks', async (req: Request, res: Response) => {
    const tasks = await Task.find()

    res.json(tasks)
})
router.post('/tasks', async (req: Request, res: Response) => {
    const { title, description } = req.body

    const task = new Task({ title, description })

    await task.save()

    res.json(task)
})
router.get('/tasks/:id', async (req: Request, res: Response) => {
    try {
        const task = await Task.findById(req.params.id)

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
        const task = await Task.findByIdAndDelete(req.params.id)

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
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!updatedTask) {
            res.status(404).json({ message: 'task not found' })
        }

        res.json(updatedTask)
    } catch (error) {
        res.status(500).send(error)
    }
})

export default router
