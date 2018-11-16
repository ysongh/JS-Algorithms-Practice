// Write a function that finds the maximum sum of a subarray.

const maxSubarraySum = (ar, size) => {
    if(size > ar.length){
        return null;
    }
    let total = 0;
    let max = total;
    let len = ar.length;
    
    for(let num = 0; num < size; num++){
        total += ar[num];
    }
    
    for(let num = size; num < len; num++){
        total = total + ar[num] - ar[num - size];
        
        if(total > max){
            max = total;
        }
    }
    
    return max;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2));