const insertionSort = arr => {
    const len = arr.length;
    
    for(let i = 1; i < len; i++){
        let j = i;
        while(arr[j] < arr[j - 1] && j - 1 >= 0){
            const temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
    
    return arr;
};

console.log(insertionSort([9, 3, 14, 1, 7]));