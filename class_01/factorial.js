"use strict";
function factorial(num) {
    if (Number.isInteger(num) && num >= 0) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        console.info(`El factorial de ${num} es igual a: ${result}`);
        return result;
    }
    else {
        throw new Error("El número debe ser un entero no negativo.");
    }
}
const num = 5;
console.info(`El factorial de ${num} es igual a: ${factorial(num)}`);
