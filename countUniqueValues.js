// Write a function that takes in a sorted array and returns the numbers of unique values in the array.

const countUniqueValues = ar => {
    if(ar.length === 0){
        return 0;
    }
    
    let uniqueCount = 1;
    let currentValue = ar[0];
    
    for(let num of ar){
        if(num !== currentValue){
            uniqueCount++;
            currentValue = num;
        }
    }
    
    return uniqueCount;
};

console.log(countUniqueValues([1, 1, 2, 2, 2, 2]));