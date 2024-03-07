"use strict";
// Main function that will calculate the number of unique ways
function gridTravelerMemo(m, n) {
    // Create an object to store the results of already solved subproblems
    const memo = {};
    // Recursive inner function to calculate the number of unique ways
    function gridTravelerRecursive(mFiles, nColumns) {
        // If we have already calculated this subproblem, return the stored result from the memo
        const key = `${mFiles}, ${nColumns}`;
        if (key in memo)
            return memo[key];
        // Base case: If either of the dimensions is 0, there are no ways to reach the goal
        if (mFiles === 0 || nColumns === 0)
            return 0;
        // Base case: If both dimensions are 1, there is only one way to reach the goal
        if (mFiles === 1 && nColumns === 1)
            return 1;
        // Move down from the current position
        const down = gridTravelerRecursive(mFiles - 1, nColumns);
        // Move right from the current position
        const right = gridTravelerRecursive(mFiles, nColumns - 1);
        // Store the result in the memo before returning it
        memo[key] = down + right;
        return memo[key];
    }
    // Call the recursive function with the given dimensions
    return gridTravelerRecursive(m, n);
}
// Example usage
const nFiles = 3;
const nColumns = 3;
console.log("Number of unique ways:", gridTravelerMemo(nFiles, nColumns)); // Output: 6
