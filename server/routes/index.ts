import { Request, Response, Router } from 'express'

const router = Router()

router.get('/tasks', (req: Request, res: Response) => {
    res.send('get tasks')
})
router.post('/tasks', (req: Request, res: Response) => {
    res.send('create tasks')
})
router.get('/tasks/:id', (req: Request, res: Response) => {
    res.send('get a tack')
})
router.delete('/tasks/:id', (req: Request, res: Response) => {
    res.send('delete a task')
})
router.put('/tasks/:id', (req: Request, res: Response) => {
    res.send('update a tack')
})

export default router
