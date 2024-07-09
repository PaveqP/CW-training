type FunctionNotation = (arg2: string, arg1: string) => boolean
type HashTable = {
    [key: string]: number
}


const scramble: FunctionNotation = (str1, str2) => {

    let hash_table: HashTable = {}

    for (let i: number = 0; i < str1.length; i++) {
        hash_table[str1[i]] ? hash_table[str1[i]]++ : hash_table[str1[i]] = 1
    }

    for (let i: number = 0; i < str2.length; i++) {
        if(hash_table[str2[i]] > 0){
            hash_table[str2[i]]--
        } else{
            return false
        }
    }

    return true
}

console.log(scramble('rkqodlw','world'))