/**
 * @param {string} digits
 * @return {string[]}
 */

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = "2"
// Output: ["a","b","c"]
 
var letterCombinations = function(digits) {
    const map = {2:"abc",3:"def",4:"ghi", 5:"jkl",6:"mno", 7:"pqrs",8:"tuv",9:"wxyz"} ;
    const res = [];

    function addNext(s, i) 
    {
        if(s.length === digits.length)
        {
            res.push(s);
            return
        }

        const next_c_list = map[digits[i]];
        for(let c of next_c_list)
        {
            addNext(s+c, i+1)
        }
    }

    addNext("", 0)
    return res;
};