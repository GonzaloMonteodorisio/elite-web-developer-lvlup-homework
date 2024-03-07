function factorial(num: number): number {
  if (Number.isInteger(num) && num >= 0) {
    let result: number = 1;

    for (let i: number = 1; i <= num; i++) {
      result *= i;
    }
    console.info(`El factorial de ${num} es igual a: ${result}`);
    return result;
  } else {
    throw new Error("El número debe ser un entero no negativo.");
  }
}

const num: number = 5;
console.info(`El factorial de ${num} es igual a: ${factorial(num)}`);


