// Write a function that return true if the string is a palindrome.

const isPalindrome = str => {
    if(str.length <= 1){
        return true;
    }
    if(str[0] !== str[str.length-1]){
        return false;
    }
    return isPalindrome(str.slice(1, str.length-1));
};

console.log(isPalindrome('tacocat'));