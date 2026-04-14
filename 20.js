/**
 * @param {string} s
 * @return {boolean}
 */

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

// Example 5:
// Input: s = "([)]"
// Output: false

var isValid = function(s) {
    // const fair = {")":"(", "]":"[", "}":"{"}
    // const stack = [];

    // for (let c of s)
    // {
    //     if (c in fair)
    //     {
    //         if( stack.pop() !== fair[c] )
    //         {
    //             return false
    //         }
    //     }
    //     else
    //     {
    //         stack.push(c)
    //     }
    // }

    // return stack.lengh === 0 


    const fair = {")":"(", "]":"[", "}":"{"}
    function dfs(i, stack)
    {
        if (i === s.length)
        {
            return stack.length === 0
        }
        const c = s[i]
        if (c in fair)
        {
            if (stack.pop() !== fair[c]) return false;
        }
        else
        {
            stack.push(c)
        }

        return dfs(i+1, stack)
    }
    return dfs(0, [])
};