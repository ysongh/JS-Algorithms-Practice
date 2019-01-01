const selectionSort = arr => {
    let len = arr.length;
    
    for(let i = 0; i < len; i++){
        let smallestValue = arr[i];
        let index;
        for(let j = i + 1; j < len ; j++){
            if(arr[j] < smallestValue){
                smallestValue = arr[j];
                index = j;
            }
        }
        if(smallestValue !== arr[i]){
            arr[index] = arr[i];
            arr[i] = smallestValue;
        }
    }
    
    return arr;
};

console.log(selectionSort([3, 9, 14, 1, 7]));