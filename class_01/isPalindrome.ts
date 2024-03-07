function isPalindrome(str: string): boolean {
  if (typeof str === "string" && str !== "") {
    const lowerStr = str.toLowerCase();
    const length: number = lowerStr.length;

    if (length <= 1) return true;

    if (lowerStr[0] !== lowerStr[length - 1]) return false;

    return isPalindrome(lowerStr.slice(1, length - 1));

  } else {
    throw new Error("It must be a non-empty string.");
  }
}

const word = 'radar';
console.info(isPalindrome(word) ? `The word '${word}' is a palindrome` : `The word '${word}' is not a palindrome`);

