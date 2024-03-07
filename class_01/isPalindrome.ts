function isPalindrome(str: string): boolean {
  if (typeof str === "string" && str !== "") {
    const lowerStr = str.toLowerCase();
    const length: number = lowerStr.length;

    if (length <= 1) return true;

    if (lowerStr[0] != lowerStr[length - 1]) return false;

    return isPalindrome(lowerStr.slice(1, length - 1));

  } else {
    throw new Error("Debe ser una cadena de caracteres y no estar vacía.");
  }
}

const word = 'radar';
console.info(isPalindrome(word) ? `La palabra '${word}' es palíndromo` : `La palabra '${word}' no es palíndromo`);
