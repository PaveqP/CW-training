type customPartitial<T, K extends keyof T = keyof T> = {
    [P in K]?: T[P]
} & {
    [P in Exclude<keyof T, K>]: T[P]
}

type customRequired<T, K extends keyof T = keyof T> = {
    [P in K]-?: T[P]
} & {
    [P in Exclude<keyof T, K>]?: T[P]
}

interface ITodo {
    title: string
    description: string
    completed: boolean
}

interface ITodo2 {
    title?: string
    description?: string
    completed?: boolean
}

const new_obj2: customPartitial<ITodo, "description"> = {
    title: 'string',
    completed: true
}

const new_obj3: customRequired<ITodo2, 'title'> = {
    title: 'string',
}