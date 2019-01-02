const selectionSort = arr => {
    let len = arr.length;
    
    for(let i = 0; i < len; i++){
        let smallest = i;
        for(let j = i + 1; j < len ; j++){
            if(arr[j] < arr[smallest]){
                smallest = j;
            }
        }
        if(smallest !== i){
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
    }
    
    return arr;
};

console.log(selectionSort([3, 9, 14, 1, 7]));