const pivot = (arr, start, end) => {
    let targetPivot = start + 1;
    let indexPivot = 0;
    for(let i = start + 1; i < end; i++){
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
    return arr;
};

console.log(pivot([5, 9, 4, 1, 8, 3, 7, 6, 2], 0, 9));