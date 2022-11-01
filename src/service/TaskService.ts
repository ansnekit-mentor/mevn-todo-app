import type { ITask, IBTask } from '@/entities/Task'
import type { AxiosResponse } from 'axios'
import axios from './axios'

const _normalizedData = (data: IBTask[] | IBTask): ITask[] | ITask => {
    if (Array.isArray(data)) {
        return data.map((task) => {
            const newTask = {
                id: task._id.toString(),
                title: task.title,
                description: task.description,
                done: task.done,
                isArchived: task.isArchived,
            }

            return newTask
        })
    }

    const task = {
        id: data._id.toString(),
        title: data.title,
        description: data.description,
        done: data.done,
        isArchived: data.isArchived,
    }

    return task
}

const getTasks = async (): Promise<ITask[]> => {
    try {
        const respData: AxiosResponse<IBTask[]> = await axios.get('/tasks')
        const { data } = respData

        const newTasks = new Promise<ITask[]>((resolve) =>
            resolve(_normalizedData(data) as ITask[]),
        )
        return newTasks
    } catch (error) {
        console.error(error)
        throw new Error('error getTasks')
    }
}
const getTask = async (task: ITask): Promise<ITask> => {
    try {
        const respData: AxiosResponse<IBTask> = await axios.get(`/tasks/${task.id}`)
        const { data } = respData

        return new Promise<ITask>((resolve) => resolve(_normalizedData(data) as ITask))
    } catch (error) {
        console.error(error)
        throw new Error('error getTask')
    }
}
const createTask = async (task: ITask): Promise<void> => {
    try {
        await axios.post('/tasks', task)
    } catch (error) {
        console.error(error)
        throw new Error('error createTask')
    }
}
const updateTask = async (task: ITask): Promise<void> => {
    try {
        await axios.put('/tasks', task)
    } catch (error) {
        console.error(error)
        throw new Error('error createTask')
    }
}
const deleteTask = async (task: ITask): Promise<void> => {
    try {
        await axios.delete(`/tasks/${task.id}`)
    } catch (error) {
        console.error(error)
        throw new Error('error deleteTask')
    }
}

export { getTasks, getTask, createTask, updateTask, deleteTask }
