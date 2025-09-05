var removeElement = function(nums, val) {
    let x = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i]!= val){
            nums[x] = nums[i];
            x++;
        }
    }
    for(let j = 0;j<x;j++){
        console.log(nums[j])
    }
    return x
};

const ans = removeElement([0,1,2,2,3,0,4,2],2)
// console.log(ans)