


function pad (str, max) {
    max = max || 2
    return str.length < max ? pad("0" + str, max) : str;
}

console.log(pad('1'));