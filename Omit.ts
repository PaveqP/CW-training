type customExclude<T, K> = T extends K ? never : T


type customOmit<T, K extends keyof T> = {
    [key in customExclude<keyof T, K>]: T[key]
}

interface ITodo {
    title: string
    description: string
    completed: boolean
}

const new_obj2: customOmit<ITodo, 'description' | 'completed'> = {
    title: 'vfdf'
}

