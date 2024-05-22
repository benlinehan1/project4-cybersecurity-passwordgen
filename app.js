// Elements

const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('password-length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const copyButton = document.getElementById('copy');

const randomisePasswordObj = {
    lower: returnLowerCase,
    upper: returnUpperCase,
    number: returnNumber,
    symbol: returnSymbol
};

// Generate button event listener
generateElement.addEventListener('click', () => {
    const lengthVal = Number(lengthElement.value);
    const upperChecked = uppercaseElement.checked;
    const lowerChecked = lowercaseElement.checked;
    const numbersChecked = numbersElement.checked;
    const symbolsChecked = symbolsElement.checked;

    resultElement.innerText = generatePassword(lengthVal, upperChecked, lowerChecked, numbersChecked, symbolsChecked);
});

// Password Generation function
function generatePassword(length, upper, lower, number, symbol) {
    let password = "";

    const countConfig = lower + upper + number + symbol;

    const configArr = [{lower}, {upper}, {number}, {symbol}].filter
    (
        config => Object.values(config)[0]
    );

    if(countConfig === 0) {
        return "";
    };

    for(let i = 0; i < length; i += countConfig) {
        configArr.forEach(config => {
            const configFunction = Object.keys(config)[0];

            password += randomisePasswordObj[configFunction]();
        })
    }

    const formattedPassword = password.slice(0, length);

    return formattedPassword;
};

// Copying functionality 

copyButton.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    const password = resultElement.innerText;

    if(!password) {
        return
    };

    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
});


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

