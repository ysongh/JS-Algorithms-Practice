// Write a function that takes in two strings and return true if the second string is an anagram of the first.

function validAnagram(word1, word2){
    if(word1.length !== word2.length){
        return false;
    }
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for(let letter of word1){
        frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
    }
    for(let letter of word2){
        frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
    }
    
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false;
        }
    }
    
    return true;
}

console.log(validAnagram("rat", "tar"));