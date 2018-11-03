// Write a function that takes in two strings and checks if the characters in the first string form a subsequence of the characters in the second string.

const isSubsequence = (str1, str2) => {
    let arrStr1 = str1.split('');
    let arrStr2 = str2.split('');
    
    let start = 0;
    let lstr1 = arrStr1.length;
    let lstr2 = arrStr2.length;
    
    for(let s = 0; s < lstr2; s++){
        if(arrStr1[start] === arrStr2[s]){
            start++;
            if(start === lstr1){
                return true;
            }
        }
    }
    
    return false;
};

console.log(isSubsequence('abc', 'acb'));