import { Request, Response } from 'express'
import { CallbackError, Document } from 'mongoose'
import TaskModel from '../models/Task'

export const getAll = async (req: Request, res: Response) => {
    try {
        const tasks = await TaskModel.find().populate('user').exec()

        res.json(tasks)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Не удалось получить список задач' })
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const { title, description, done, archived } = req.body

        const task = new TaskModel({ title, description, done, archived, user: req.userId })

        await task.save()

        res.json(task)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Не удалось создать задачу' })
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        const task = await TaskModel.findById(req.params.id)

        if (!task) {
            res.status(404).json({ message: 'task not found' })
        }
        res.send(task)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Не удалось создать задачу' })
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        await TaskModel.findByIdAndDelete(req.params.id, (err: CallbackError, doc: Document) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ message: 'Не удалось удалить задачу' })
            }

            if (!doc) {
                return res.status(404).json({ message: 'Задача не найдена' })
            }
        })

        res.json({ sucsess: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Не удалось создать задачу' })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const updatedTask = await TaskModel.findByIdAndUpdate(req.params.id, {
            ...req.body,
            user: req.userId,
        })

        if (!updatedTask) {
            res.status(404).json({ message: 'Не удалось обновить задачу' })
        }

        res.json({ sucsess: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Не удалось обновить задачу' })
    }
}
