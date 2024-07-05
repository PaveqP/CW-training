type ArrayOfString = string[]

function inArray(array1: ArrayOfString, array2: ArrayOfString): ArrayOfString {
    let r = [] as ArrayOfString

    array1.forEach((element: string) => {
        if(array2.some((el2: string) => el2.includes(element))){
            r.push(element)
        }
    });

    return r.sort()
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))