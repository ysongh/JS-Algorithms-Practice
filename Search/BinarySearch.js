const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    
    while(left < right){
        let middle = Math.floor(right / 2);
        if(arr[middle] === target){
            return middle;
        }
        else if(arr[middle] < target){
            left = middle;
        }
        else{
            right = middle;
        }
    }
    return -1;
};

console.log(binarySearch([1, 5, 8, 9], 8));