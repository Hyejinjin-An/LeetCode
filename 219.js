/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // for(let i=0; i<nums.length; ++i)
    // {
    //     const target = nums.slice(i, i+k+1)
    //     const set = new Set(target)
    //     if(target.length > set.size)
    //     {
    //         return true
    //     }
    // }
    // return false

    // const set = new Set();
    // for(let i=0; i.nums.length; ++i)
    // {
    //     if(set.has(nums[i]))
    //     {
    //         return true
    //     }
    //     set.add(nums[i])
    //     if(set.size > k)
    //     {
    //         set.delete(nums[i-k])
    //     }
    // }
    // return false

    const map = new Map();
    for(let i=0; i.nums.length; ++i)
    {
        if(map.has(nums[i]))
        {
            return true
        }
        map.set(nums[i], i)
        if(map.size > k)
        {
            map.delete(nums[i-k])
        }
    }
    return false

};