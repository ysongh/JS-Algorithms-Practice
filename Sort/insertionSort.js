const insertionSort = arr => {
    const len = arr.length;
    
    for(let i = 1; i < len; i++){
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j - 1]){
                const temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    
    return arr;
};

console.log(insertionSort([3, 9, 14, 1, 7]));