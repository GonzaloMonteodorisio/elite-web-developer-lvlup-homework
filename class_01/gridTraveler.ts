function gridTraveler(m: number, n: number): number {
  if (Number.isInteger(m) && Number.isInteger(n)) {
    if (m === 0 || n === 0) return 0;
    if (m === 1 || n === 1) return 1;
  
    return gridTraveler(m - 1, n) + gridTraveler(m, n -1);

  } else {
    throw new Error("It must be a non-empty string.");
  }
}

const m = 4;
const n = 4;
console.info(`Para una cuadrícula de dimension ${m} x ${n} la cantidad de formas únicas de llegar desde la esquina superior izquierda a la esquina superior derecha son: ${gridTraveler(m, n)}`);
