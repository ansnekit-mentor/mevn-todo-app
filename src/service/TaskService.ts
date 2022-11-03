import type { ITask, IBTask, IBaseTask } from '@/entities/Task'
import type { AxiosResponse } from 'axios'
import axios from './axios'

const _normalizedData = (data: IBTask[] | IBTask): ITask[] | ITask => {
    if (Array.isArray(data)) {
        return data.map((task) => {
            const newTask = {
                id: task._id.toString(),
                title: task.title ?? '',
                description: task.description ?? '',
                done: task.done ?? false,
                archived: task.archived ?? false,
            }

            return newTask
        })
    }

    const task = {
        id: data._id.toString(),
        title: data.title ?? '',
        description: data.description ?? '',
        done: data.done ?? false,
        archived: data.archived ?? false,
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
const getTask = async (id: string): Promise<ITask> => {
    try {
        const respData: AxiosResponse<IBTask> = await axios.get(`/tasks/${id}`)
        const { data } = respData

        return new Promise<ITask>((resolve) => resolve(_normalizedData(data) as ITask))
    } catch (error) {
        console.error(error)
        throw new Error('error getTask')
    }
}
const createTask = async (task: IBaseTask): Promise<void> => {
    try {
        await axios.post('/tasks', task)
    } catch (error) {
        console.error(error)
        throw new Error('error createTask')
    }
}
const updateTask = async (id: string, task: IBaseTask): Promise<void> => {
    try {
        await axios.put(`/tasks/${id}`, task)
    } catch (error) {
        console.error(error)
        throw new Error('error createTask')
    }
}
const deleteTask = async (id: string): Promise<void> => {
    try {
        await axios.delete(`/tasks/${id}`)
    } catch (error) {
        console.error(error)
        throw new Error('error deleteTask')
    }
}

export { getTasks, getTask, createTask, updateTask, deleteTask }
