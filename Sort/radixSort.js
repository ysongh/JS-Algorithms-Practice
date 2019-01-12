const radixSort = arr => {
    const len = arr.length;
    const maxLen = mostDigits(arr);
    for(let k = 0; k < maxLen; k++){
        let buckets = [[], [], [], [], [], [], [], [], [], [],];
        for(let i = 0; i < len; i++){
            let num = getDigit(arr[i], k);
            buckets[num].push(arr[i]);
        }
        arr = [].concat(...buckets);
    }
    
    return arr;
};

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

console.log(radixSort([1234, 3, 56, 145, 45, 86532]));