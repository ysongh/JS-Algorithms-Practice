const getDigit = (num, i) => {
    const divideBy = Math.pow(10, i);
    const total = num / divideBy;
    const digit = Math.floor(total) % 10;
    
    return digit;
};

const digitCount = num => {
    const numString = num.toString();
    return numString.length;
};

const mostDigits = arr => {
    const len = arr.length;
    let maxDigits = 0;
    
    for(let i = 0; i < len; i++){
        const count = digitCount(arr[i]);
        if(count > maxDigits){
            maxDigits = count;
        }
    }
    
    return maxDigits;
};

console.log(getDigit(1234, 0));
console.log(getDigit(1234, 1));
console.log(getDigit(1234, 2));
console.log(getDigit(1234, 3));

console.log(digitCount(1234));

console.log(mostDigits([1234, 3, 56, 145, 45, 86532]));