const productOfArray = ar => {
    if(ar.length === 0){
        return 0;
    }
    if(ar.length === 1){
        return ar[0];
    }
    let num = ar.pop();
    return num * productOfArray(ar);
};

console.log(productOfArray([1, 2, 3, 10]));