function damagedOrSunk (board, attacks){
    
    let ships = {}

    let result = {
        sunk: 0, 
        damaged: 0, 
        notTouched: 0, 
        points: 0
    }

    for (let y = 0; y < board.length; y++){
        for (let x = 0; x < board[y].length; x++){
            const board_value = board[y][x]
            if ((board_value !== 0) && ships[board_value]){
                ships[board_value].push(`${x + 1},${(board.length - y)}`)
            }
            if ((board_value !== 0) && !ships[board_value]){
                ships[board_value] = [`${x + 1},${(board.length - y)}`]
            }
        }
    }

    for (let i = 0; i < attacks.length; i++){
        const attack_coords = String(attacks[i])

        for (let key in ships){
            if (ships[key].includes(attack_coords)){
                ships[key] = ships[key].map((ship) => {
                    if (ship === attack_coords){
                        return ship = 'shot'
                    } else {
                        return ship
                    }
                })
            }
        }
    }

    for (let key in ships){
        if (!ships[key].includes('shot')){
            result.points -= 1
            result.notTouched += 1
            continue
        }
        if (ships[key].every((elem) => elem === 'shot')){
            result.points += 1
            result.sunk += 1
            continue
        } 
        else {
            result.points += 0.5
            result.damaged += 1
        }
    }

    return result
}





const board = [ [0, 0, 1, 0],
              [0, 0, 1, 0],
              [0, 0, 1, 0] ];
          
const attacks = [[3, 1], [3, 2], [3, 3]];
console.log(damagedOrSunk(board, attacks))