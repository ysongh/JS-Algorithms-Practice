const mergeSort = arr => {
    if(arr.length <= 1){
        return arr;
    }
    let midpoint = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, midpoint));
    let right = mergeSort(arr.slice(midpoint));
    
    return merge(left, right);
};

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
        if(arr1[i] >= arr2[j]){
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

console.log(mergeSort([8, 5, 99, 76, 102, 3, 67, 55]));