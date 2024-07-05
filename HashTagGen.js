function generateHashtag2(str) {
    var words = str.split(" ");
    var res = '#';
    if (str.length === 0)
        return false;
    words.forEach(function (value) {
        var word = '';
        value[0] && (word = (value[0].toUpperCase() + value.slice(1, value.length)));
        res = res + word;
    });
    if (res.length > 140 || (res.length === 1 && res[0] === '#'))
        return false;
    return res;
}
console.log(generateHashtag2("a".repeat(139)));
