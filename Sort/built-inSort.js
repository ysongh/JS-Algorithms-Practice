const compareNumAscendingOrder  = (number1, number2) => {
    return number1 - number2;
};

const compareNumDescendingOrder  = (number1, number2) => {
    return number2 - number1;
};

// sort the number from least to greatest using built in method
console.log([15, 53, 25, 14, 8].sort(compareNumAscendingOrder));

// sort the number from greatest to least using built in method
console.log([15, 53, 25, 14, 8].sort(compareNumDescendingOrder));