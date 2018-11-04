const averagePair = (ar, target) => {
    let start = 0;
    let end = ar.length - 1;
    
    while (start < end){
        let total = (ar[start] + ar[end]) / 2;
        if(total === target){
            return true;
        }
        else if(total > target){
            end--;
        }
        else{
            start++;
        }
    }
    
    return false;
};

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));