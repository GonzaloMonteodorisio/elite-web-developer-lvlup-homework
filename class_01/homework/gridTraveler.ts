function gridTraveler(m: number, n: number): number {
  if (Number.isInteger(m) && Number.isInteger(n)) {
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;
  
    return gridTraveler(m - 1, n) + gridTraveler(m, n -1);

  } else {
    throw new Error("Both dimensions must be non-negative integers.");
  }
}

const m = 4;
const n = 4;
console.info(`For a grid of dimension ${m} x ${n}, the number of unique ways to reach from the top-left corner to the top-right corner is: ${gridTraveler(m, n)}`);
