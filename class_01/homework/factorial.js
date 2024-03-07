"use strict";
function factorial(num) {
    if (Number.isInteger(num) && num >= 0) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        console.info(`The factorial of ${num} is equal to: ${result}`);
        return result;
    }
    else {
        throw new Error("The number must be a non-negative integer.");
    }
}
const num = 5;
console.info(`The factorial of ${num} is equal to: ${factorial(num)}`);
