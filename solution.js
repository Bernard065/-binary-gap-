function solution(N) {
    // Convert N to its binary representation
    const binaryString = N.toString(2);

    // Split the binary string by '1's to find the gaps of zeros
    const gaps = binaryString.split('1');

    // Remove the first and last elements if they are empty
    // because they are not surrounded by '1's
    if (binaryString[0] === '0') gaps.shift();
    if (binaryString[binaryString.length - 1] === '0') gaps.pop();

    // Find the length of the longest gap
    let maxLength = 0;
    for (const gap of gaps) {
        if (gap.length > maxLength) {
            maxLength = gap.length;
        }
    }

    return maxLength;
}

// Test cases
console.log(solution(9));      // Output: 2
console.log(solution(529));    // Output: 4
console.log(solution(20));     // Output: 1
console.log(solution(15));     // Output: 0
console.log(solution(32));     // Output: 0
console.log(solution(1041));   // Output: 5
