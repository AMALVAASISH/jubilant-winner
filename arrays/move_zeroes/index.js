var moveZeroes = function(nums) {
    let p =0
    for(let i = 0;i<nums.length;i++){
        if(!(nums[i] == 0)){
            nums[p] = nums[i]
            p++
        }
    }

    for(let j = p;j<nums.length;j++){
        nums[j] = 0
    }

    for(let j = 0;j<nums.length;j++){
        console.log(nums[j])
    }
};


moveZeroes([0,1,0,3,12])