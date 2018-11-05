// Write a function that accepts a base and an exponent.
// It should return the power of the base to the exponent.

const power = (p, ex) => {
    if(ex === 0){
        return 1;
    }
    return p * power(p, ex -1);
};

console.log(power(2, 0));