/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

// Example 1:

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// Example 2:

// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455
// Example 3:

// Input: num = [2,1,5], k = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021

var addToArrayForm = function(num, k) {
    // 1.BigInt로 변환하여 더하기
    // const sum = BigInt(num.join("")) + BigInt(k);
    // return [...String(sum).map(Number)]

    // 2. 알고리즘 풀이
    let pos = num.length-1;
    while(pos >= 0)
    {
        k += num[pos];
        num[pos] = k % 10
        k = Math.floor(k/10)
        pos--
    }

    if (k === 0) return num;
    k = k.toString().split("").map(Number)
    return [...k, ...num]
};