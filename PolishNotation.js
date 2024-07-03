function calculate(expression) {

    let symbols = expression.split(' ')
    let i = 0

    while (symbols.length !== 1){
        for (let i = 0; i <= symbols.length; i++){
            if (Number(symbols[i]) && symbols[i - 1] === '+'){
                symbols[i] = Number(symbols[i]) + Number(symbols[i + 1])
                symbols.splice(i-1, 1)
                symbols.splice(i, 1)
            }
            if (Number(symbols[i]) && symbols[i - 1] === '-'){
                symbols[i] = Number(symbols[i]) - Number(symbols[i + 1])
                symbols.splice(i-1, 1)
                symbols.splice(i, 1)
            }
            if (Number(symbols[i]) && symbols[i - 1] === '*'){
                symbols[i] = Number(symbols[i]) * Number(symbols[i + 1])
                symbols.splice(i-1, 1)
                symbols.splice(i, 1)
            }
            if (Number(symbols[i]) && symbols[i - 1] === '/'){
                symbols[i] = Number(symbols[i]) / Number(symbols[i + 1])
                symbols.splice(i-1, 1)
                symbols.splice(i, 1)
            }
        }
    }
  
    return Number(symbols[0]);
}

console.log(calculate('* + 2 2 3'))