type MemoObject = Record<number, number>;

const fibonacciMemoObj = (n: number, memo: MemoObject = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibonacciMemoObj(n - 1) + fibonacciMemoObj(n - 2);
  return memo[n];
}

console.time("FIB MEMO OBJ");
const numberFibonacciMemoObj = 6;
console.info(`The number at index ${numberFibonacciMemoObj} in the Fibonacci sequence, using Memo Obj, is equal to: ${fibonacciMemoObj(numberFibonacciMemoObj)}`);
console.timeEnd("FIB MEMO OBJ");
