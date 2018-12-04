const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    
    while(left <= right){
        
        if(arr[middle] === target){
            return middle;
        }
        else if(arr[middle] < target){
            left = middle + 1;
        }
        else{
            right = middle - 1;
        }
        
        middle = Math.floor((left + right) / 2);
    }
    return -1;
};

console.log(binarySearch([1, 5, 8, 9], 5));