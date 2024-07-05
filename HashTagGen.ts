type ReturnValue = (string | boolean)

function generateHashtag(str: string): ReturnValue {
    let words: string[] = str.split(" ")
    let res: string = '#'

    if (str.length === 0) return false

    words.forEach((value: string) => {
        let word: string = ''
        value[0] && (word = (value[0].toUpperCase() + value.slice(1, value.length)))
        res = res + word
    })

    if (res.length > 140 || (res.length === 1 && res[0] === '#')) return false

    return res
}

console.log(generateHashtag("a".repeat(139)))

