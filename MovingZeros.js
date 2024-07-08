// todo
// тип массива с разными значениями (строки, числа, boolean)
function moveZerosTS(arr) {
    var res_arr = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count += 1;
        }
        else {
            res_arr.push(arr[i]);
        }
    }
    while (count > 0) {
        res_arr.push(0);
        count -= 1;
    }
    return res_arr;
}
console.log(moveZerosTS([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZerosTS([1, 2, 0, 1, 0, 1, 0, [3], 0, 1]));
