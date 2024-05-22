// Password generation return functions 
function returnLowerCase() {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const charsLength = chars.length;
    return chars.charAt(Math.floor(Math.random() * charsLength));
};

function returnUpperCase() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charsLength = chars.length;
    return chars.charAt(Math.floor(Math.random() * charsLength));
};

function returnNumber() {
    const nums = "0123456789";
    const numsLength = nums.length;
    return nums.charAt(Math.floor(Math.random() * numsLength));
};



function returnSymbol() {
    const symbols = "!@#$%^&*(){}<>/,.'";
    const symbolsLength = symbols.length;
    return symbols.charAt(Math.floor(Math.random() * symbolsLength));
};

