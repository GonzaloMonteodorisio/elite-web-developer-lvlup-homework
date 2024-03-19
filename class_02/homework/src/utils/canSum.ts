export const canSum = (target: number, numbers: number[], memo : {[key: number]: boolean} = {}): boolean => {
  if (target in memo) return memo[target];
  // Memory leak
  if (target === 0) return true;
  if (target < 0) return false;

  for (const num of numbers) {
    const difference = target - num;
    if (canSum(difference, numbers)) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}