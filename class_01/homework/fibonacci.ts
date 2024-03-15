function fibonacci(num: number): number {
  if (Number.isInteger(num) && num >= 0) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
  } else {
    throw new Error("The number must be a non-negative integer.");
  }
}

console.time("FIB");
const number = 7;
console.info(`The number at index ${number} in the Fibonacci sequence is equal to: ${fibonacci(number)}`);
console.timeEnd("FIB");
