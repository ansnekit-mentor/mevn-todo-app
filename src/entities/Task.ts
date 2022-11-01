export type Rename<T, K extends keyof T, N extends string> = Pick<T, Exclude<keyof T, K>> & {
    [P in N]: T[K]
}

export interface IBTask {
    _id: string
    title: string
    description: string
    done: boolean
    isArchived: boolean
}

export interface ITask {
    id: string
    title: string
    description: string
    done: boolean
    isArchived: boolean
}
