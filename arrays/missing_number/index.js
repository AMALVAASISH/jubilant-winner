var missingNumber = function(nums) {

    let sum = 0
    for(let i = 0;i<nums.length;i++){
        sum = sum + nums[i]
    }
    let n = nums.length
    const sum1 = (n*(n+1))/2
    return sum1 - sum
};

const ans = missingNumber([9,6,4,2,3,5,7,0,1])
console.log(ans)