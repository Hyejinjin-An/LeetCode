/**
 * @param {string} s
 * @return {number}
 */

/*
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
var lengthOfLongestSubstring = function(s) {
    // let max = 0;
    // let left = 0;
    // const set = new Set()
    // for(let i=0; i<s.length; ++i)
    // {
    //     while(set.has(s[i]))
    //     {
    //         set.delete(s[left]);
    //         ++left;
    //     }
    //     set.add(s[i])
    //     // 길이체크
    //     if(max < set.size)
    //     {
    //         max = set.size
    //     }
    // }
    // return max;

    let max = 0;
    let left = 0;
    const map = new Map()
    for(let i=0; i<s.length; ++i)
    {
        if(map.get(s[i]) >= left)
        {
            left = map.get(s[i]) + 1
        }
        map.set(s[i], i);
        const length = i - left + 1;
        if(max < length)
        {
            max = length
        }
    }

};