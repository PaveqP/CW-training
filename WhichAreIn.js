function inArray(array1, array2) {
    var r = [];
    array1.forEach(function (element) {
        if (array2.some(function (el2) { return el2.includes(element); })) {
            r.push(element);
        }
    });
    return r.sort();
}
console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
