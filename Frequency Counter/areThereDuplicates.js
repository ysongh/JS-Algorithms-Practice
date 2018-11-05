// Write a function that accepts an array and checks whether there are duplicates values in the array.

const areThereDuplicates = ar => {
    let frequencyCounter = {};
    
    for(let s of ar){
        frequencyCounter[s] = (frequencyCounter[s] || 0) + 1;
        
        if(frequencyCounter[s] > 1){
            return true;
        }
    }
    
    return false;
};

console.log(areThereDuplicates(['a', 'b', 'a', 'c']));