function hexStringToRGB2(hexString) {
    var hex = hexString.slice(1);
    var result = {
        "r": parseInt(hex.slice(0, 2), 16),
        "g": parseInt(hex.slice(2, 4), 16),
        "b": parseInt(hex.slice(4, 6), 16)
    };
    return result;
}
console.log(hexStringToRGB2('#FF9933'));
