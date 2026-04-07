/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
        I: 1, 
        V: 5, 
        X: 10, 
        L: 50, 
        C: 100, 
        D: 500, 
        M: 1000
    };

    const subMap = {
        IV:4,
        IX:9,
        XL:40,
        XC:90,
        CD:400,
        CM:900
    }

    // let skip = false;
    // let result = 0;

    // for(let i=0; i<s.length-1; ++i)
    // {
    //     if(skip)
    //     {
    //         skip = false;
    //         continue;
    //     }

    //     const c = s[i];

    //     if(['I', 'X', 'C'].includes(c))
    //     {
    //         const next = s[i+1]
    //         if(subMap[c+next])
    //         {
    //             result += subMap[c+next]
    //             skip = true;
    //             continue;
    //         }
    //     }
    //     result += symbols[c];
    // }

    // if(!skip)
    // {
    //     result += symbols[s[s.length-1]];
    // }
    // return result;

    // let result = 0;
    // for(let i=0; i<s.length-1; ++i)
    // {
    //     const next = s[i+1]
    //     if(subMap[c+next])
    //     {
    //         result += subMap[c+next]
    //         ++i;
    //         continue;
    //     }
    // }
    // result += sysbols[]
    // return result;

    let result = 0;
    for(let i=0; i<s.length; ++i)
    {
        const c = symbols[s[i]];
        const next = symbols[s[i+1]];

        if(next && c < next)
        {
            result += (next - c)
            ++i;
        }
        else
        {
            result += c
        }
    }
    return result;
};