type customReadOnly<T> = {
    readonly [P in keyof T]: T[P]
}

interface ITodo {
    title: string
    description: string
    completed: boolean
}

const new_obj1: customReadOnly<ITodo> = {
    title: 'string',
    description: 'vd',
    completed: false,
}

new_obj1.title = '42342'