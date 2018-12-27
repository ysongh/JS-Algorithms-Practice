// Write a fuction that accept an array and a callback.

const isOld = value => {
    return value % 2 !== 0;
};

const someRecursive = (arr, isOld) => {
    if(arr.length === 0){
        return false;
    }
    return isOld(arr[0]) || someRecursive(arr.slice(1), isOld);
};

console.log(someRecursive([1, 2, 3, 4]), isOld);