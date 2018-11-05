/*  Write a function that accepts sorted array of integers and a target average, 
    and checks if there is a pair of values in the array where the average of the pair equals to the target average.
*/

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