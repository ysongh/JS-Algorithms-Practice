const merge = (arr1, arr2) => {
    const newArray = [];
    let len1 = arr1.length;
    let len2 = arr2.length;
    let i = 0;
    let j = 0;
    
    while(i < len1 ||  j < len2){
        if(arr1[i] < arr2[j]){
            newArray.push(arr1[i]);
            i++;
        }
        if(arr1[i] > arr2[j]){
            newArray.push(arr2[j]);
            j++;
        }
        if(i >= len1){
            newArray.push(arr2[j]);
            j++;
        }
        else if(j >= len2){
            newArray.push(arr1[i]);
            i++;
        }
    }
    
    return newArray;
};

console.log(merge([2, 4, 8, 10, 12], [1, 6, 9]));