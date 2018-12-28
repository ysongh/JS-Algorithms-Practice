// find certain string in the long string
const naiveSearch = (longStr, targetStr) => {
    let len1 = longStr.length;
    let len2 = targetStr.length;
    let count = 0;
    
    for(let a = 0; a < len1; a++){
        for(let b = 0; b < len2; b++){
            if(longStr[a + b] !== targetStr[b]){
                break;
            }
            if(b === len2 - 1){
                count++;
            }
        }
    }
    
    return count;
};

console.log(naiveSearch('thetreecolortree', 'tree'));