// amal's code

// var findMaxConsecutiveOnes = function(nums) {
//   let n = 0
//   let arr = []
//   for(let i = 0;i<nums.length;i++){
//     if(nums[i] == 1){
//         n++
//     }else{
//         arr.push(n)
//         n = 0
//     }
//   }
//   arr.push(n)
//   return Math.max(...arr)
// };

// const ans = findMaxConsecutiveOnes([1,1,0,1,1,1])
// console.log(ans)

// akshays code

var findMaxConsecutiveOnes = function(nums) {
  let curr = 0
  let max = 0 
  for(let i = 0;i<nums.length;i++){
    if(nums[i] == 1){
        curr++
    }else{
        if(curr>max){
            max = curr
        }
        curr = 0
    }
  }
  if(curr>max){
    max = curr
  }
  return max
};