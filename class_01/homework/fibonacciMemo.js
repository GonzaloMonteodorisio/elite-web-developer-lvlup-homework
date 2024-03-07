"use strict";
const fibonacciMemo = (n, memo = []) => {
    if (memo[n] !== undefined) {
        return memo[n];
    }
    if (n <= 2) {
        return 1;
    }
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
};
const numberFibonacciMemo = 6;
console.info(`The number at index ${numberFibonacciMemo} in the Fibonacci sequence, using Memo, is equal to: ${fibonacci(numberFibonacciMemo)}`);
