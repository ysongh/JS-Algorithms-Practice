const getDigit = (num, i) => {
    const divideBy = Math.pow(10, i);
    const total = num / divideBy;
    const digit = Math.floor(total) % 10;
    
    return digit;
};

console.log(getDigit(1234, 0));
console.log(getDigit(1234, 1));
console.log(getDigit(1234, 2));
console.log(getDigit(1234, 3));