/**
 * @param {number[]} digits
 * @return {number[]}
 */

//  예시 1:

// 입력: digits = [1,2,3]
//  출력: [1,2,4]
//  설명: 배열은 정수 123을 나타냅니다.
// 1씩 증가시키면 123 + 1 = 124가 됩니다.
// 따라서 결과는 [1,2,4]가 되어야 합니다.
// 예시 2:

// 입력: digits = [4,3,2,1]
//  출력: [4,3,2,2]
//  설명: 이 배열은 정수 4321을 나타냅니다.
// 1씩 증가시키면 4321 + 1 = 4322가 됩니다.
// 따라서 결과는 [4,3,2,2]가 되어야 합니다.
// 예시 3:

// 입력: digits = [9]
//  출력: [1,0]
//  설명: 배열은 정수 9를 나타냅니다.
// 1씩 증가시키면 9 + 1 = 10이 됩니다.
// 따라서 결과는 [1,0]이어야 합니다.
 
 
var plusOne = function(digits) {
    // 1.
    // const s = digits.join("") // [4,3,2,1] -> "4321"
    // // const digit = [...digits]
    // const digit = ( (BigInt(s)) + 1n )
    // digit.toString().split(""); // "4322" -> ["4", "3", "2", "2"]
    // return digit.map( (c) => { return Number(c) } );

    // 2. 수학문제처럼 풀기
    let pos = digits.length -1;
    while(pos >= 0)
    {
        if(digits[pos] === 9)
        {
            digits[pos] = 0;
            pos--; // 자릿수 올리기
        }
        else
        {
            digits[pos]++;
            return digits
        }
    }
    digits = [1, ...digits];
    return digits
};