import type { ITask } from '@/entities/Task'
import { ref, computed } from 'vue'
import { deleteTask, getTasks, updateTask, getTask } from '@/service/TaskService'

export default function useTasks() {
    const tasks = ref<ITask[]>([])
    const task = ref<ITask | null>(null)

    const fetchTasks = async () => {
        tasks.value = await getTasks()
    }

    const fetchTask = async (id: string): Promise<void> => {
        task.value = await getTask(id)
    }

    const notArchivedTask = computed(() => tasks.value.filter((task) => !task.archived))
    const archivedTask = computed(() => tasks.value.filter((task) => task.archived))

    const onChangeStatus = async (id: string, key: 'done' | 'archived'): Promise<void> => {
        let taskIndex = -1
        const taskById = tasks.value.find((task, idx) => {
            taskIndex = idx
            return task.id === id
        })

        if (taskById && taskIndex !== -1) {
            taskById[key] = !taskById[key]
            tasks.value.splice(taskIndex, 1, taskById)

            await updateTask(taskById.id, taskById)
        }

        if (task.value && task.value.id === id) {
            task.value[key] = !task.value[key]
            await updateTask(task.value.id, task.value)
        }
    }

    const onDeleteTask = async (id: string): Promise<void> => {
        const taskIndex = tasks.value.findIndex((task) => task.id === id)

        if (taskIndex !== -1) {
            tasks.value.splice(taskIndex, 1)

            await deleteTask(id)
        }

        if (task.value && task.value.id === id) {
            await deleteTask(id)
        }
    }

    return {
        tasks,
        task,
        notArchivedTask,
        archivedTask,
        fetchTask,
        fetchTasks,
        onChangeStatus,
        onDeleteTask,
    }
}
