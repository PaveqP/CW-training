function inArray(array1,array2){
    let r = []

    array1.forEach(element => {
        if(array2.some((el2) => el2.includes(element))){
            r.push(element)
        }
    });

    return r.sort()
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))