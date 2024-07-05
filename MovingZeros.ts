function moveZerosTS(arr: any[]): any[] {
    let res_arr: any[] = []
    let count: number = 0

    for (var i: number = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count += 1
        } else {
            res_arr.push(arr[i])
        }
    }

    while (count > 0){
        res_arr.push(0)
        count -= 1
    }

    return res_arr;
}

console.log(moveZerosTS([1,2,0,1,0,1,0,3,0,1]))