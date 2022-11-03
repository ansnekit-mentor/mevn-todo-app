import { Statuses } from '@/types/FilterTasks'
import { ref } from 'vue'

export default function useTasksFilter() {
    const currentFilter = ref<Statuses>(Statuses.all)
    const btnStatuses = [
        { status: Statuses.all, text: 'Все' },
        { status: Statuses.done, text: 'Выполненные' },
        { status: Statuses.undone, text: 'Невыполненные' },
    ]

    const changeFilter = (status: Statuses) => (currentFilter.value = status)

    return {
        btnStatuses,
        currentFilter,
        changeFilter,
    }
}
