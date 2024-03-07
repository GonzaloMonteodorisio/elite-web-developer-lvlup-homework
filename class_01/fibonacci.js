"use strict";
function fibonacci(num) {
    if (Number.isInteger(num) && num >= 0) {
        if (num == 0)
            return 0;
        if (num == 1)
            return 1;
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
    else {
        throw new Error("El número debe ser un entero no negativo.");
    }
}
const number = 7;
console.info(`El número de índice ${number} en la secuencia Fibonacci es igual a: ${fibonacci(number)}`);
