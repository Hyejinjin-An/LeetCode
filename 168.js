/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = "";

    while(columnNumber > 0)
    {
        columnNumber --; // A:1 -> A:0 설정
        const v = columnNumber % 26;
        // String.fromCharCode(65+(columnNumber % 26));
        res = letter[v] + res; // AA, AB
        columnNumber = Math.floor(columnNumber/26)
    }

    return res;
};


// https://leetcode.com/problems/excel-sheet-column-title/