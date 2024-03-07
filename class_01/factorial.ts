function factorial(num: number): number {
  if (Number.isInteger(num) && num >= 0) {
    let result: number = 1;

    for (let i: number = 1; i <= num; i++) {
      result *= i;
    }
    console.info(`The factorial of ${num} is equal to: ${result}`);
    return result;
  } else {
    throw new Error("The number must be a non-negative integer.");
  }
}

const num: number = 5;
console.info(`The factorial of ${num} is equal to: ${factorial(num)}`);



