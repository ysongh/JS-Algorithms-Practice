const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
};

const pivot = (arr, start, end) => {
    const len = arr.length;
    let targetPivot = start + 1;
    let indexPivot = start;
    
    for(let i = start + 1; i < len; i++){
        if(arr[start] > arr[i]){
            const temp = arr[i];
            arr[i] = arr[targetPivot];
            arr[targetPivot] = temp;
            indexPivot++;
            targetPivot++;
        }
    }
    const temp = arr[indexPivot];
    arr[indexPivot] = arr[start];
    arr[start] = temp;
    return indexPivot;
};

console.log(quickSort([5, 9, 4, 1, 8, 3, 7, 6, 2]));