// Write a function that takes in two positive integers and find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2){
    let sNum1 = num1.toString();
    let sNum2 = num2.toString();
    
    if(sNum1.length !== sNum2.length){
        return false;
    }
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for(let s of sNum1){
        frequencyCounter1[s] = (frequencyCounter1[s] || 0) + 1;
    }
    
    for(let s of sNum2){
        frequencyCounter2[s] = (frequencyCounter2[s] || 0) + 1;
    }
    
    for(let check of sNum1){
        if(frequencyCounter1[check] !== frequencyCounter2[check]){
            return false;
        }
    }
    
    return true;
}

console.log(sameFrequency(182, 281));