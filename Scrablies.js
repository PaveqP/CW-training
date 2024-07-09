// var scramble = function (str1, str2) {

//     let result = ''

//     for (var i = 0; i <= str2.length; i++) {
//         if (str1.includes(str2[i])) {
//             var cur_idx = str1.indexOf(str2[i]);
//             //str1 = str1.replace(str1[cur_idx], '');
//             result += str1[cur_idx]
//             str1 = str1.replace(str1[cur_idx], '');
//         }
//     }

//     console.log(result)

//     if (result === str2){
//         return true
//     } else {
//         return false;
//     }
    
// };

var scramble2 = function (str1, str2) {

    let hash_table = {}

    for (let i = 0; i < str1.length; i++) {
        hash_table[str1[i]] ? hash_table[str1[i]]++ : hash_table[str1[i]] = 1
    }

    for (let i = 0; i < str2.length; i++) {
        if(hash_table[str2[i]] > 0){
            hash_table[str2[i]]--
        } else{
            return false
        }
    }

    return true
    
};

console.log(scramble('rkqodlwoo',           'world'));
