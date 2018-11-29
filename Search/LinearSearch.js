const linearSearch = (arr, target) => {
    let len = arr.length;
    for(let i = 0; i < len; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
};

console.log(linearSearch([1, 5, 8, 9], 8));