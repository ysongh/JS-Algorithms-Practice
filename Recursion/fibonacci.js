// Write a function that accepts a number and return the nth number in the Fibonacci squence.

const fib = n => {
    if(n === 1){
        return 1;
    }
    if(n === 0){
        return 0;
    }
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(10));