export type Rename<T, K extends keyof T, N extends string> = Pick<T, Exclude<keyof T, K>> & {
    [P in N]: T[K]
}

export interface IBaseTask {
    title: string
    description: string
    done: boolean
    archived: boolean
}

export interface IBTask extends IBaseTask {
    _id: string
}

export interface ITask extends IBaseTask {
    id: string
}
