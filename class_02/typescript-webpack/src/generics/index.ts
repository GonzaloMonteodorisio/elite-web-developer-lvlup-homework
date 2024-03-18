export const concatArrays = <T,U>(arr1: T[], arr2: U[]): (T | U)[] => {
  return [...arr1, ...arr2];
}

export const customMap = <T>(array:T[], fn: (element: T) => T): T[] => {
  return array.map(fn);
}


export const getUniquesItems = <T>(list: T[]): T[] => {
  return Array.from(new Set(list));
}