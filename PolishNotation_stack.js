function calculate(expression) {

    let symbols = expression.split(' ')
    let stack = []

    if (symbols.length === 1){
        return Number(symbols[0])
    }

    for (let i = symbols.length - 1; i >= 0; i--){
        if (Number(symbols[i])){
            stack.push(symbols[i])
        } else {
            let first = stack.pop()
            let second = stack.pop()
            switch (symbols[i]){
                case ('+'):
                    stack.push(Number(first) + Number(second))
                    break
                case ('-'):
                    stack.push(Number(first) - Number(second))
                    break
                case ('*'):
                    stack.push(Number(first) * Number(second))
                    break
                case ('/'):
                    stack.push(Number(first) / Number(second))
                    break
            }
        }
    }
  
    return Number(stack[0]);
}

console.log(calculate('0'))