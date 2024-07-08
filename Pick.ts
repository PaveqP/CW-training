type customPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

interface ITodo {
    title: string
    description: string
    completed: boolean
}

const new_obj: customPick<ITodo, 'description' | 'completed'> = {
    description: 'vd',
    completed: false,
}