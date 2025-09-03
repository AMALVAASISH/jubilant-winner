// my code

// function removeDuplicates(arr){
//     let x = 0
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] == arr[i+1]){
//             continue
//         }else{
//             x = x+1
//             arr[x] = arr[i+1]
//         }
//     }
    
//     return x+1
// }

// const ans = removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,5])

// console.log(ans)

// akshays code

// my code

function removeDuplicates(arr){
    let x = 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > arr[x]){
            x = x + 1
            arr[x] = arr[i]
        }
    }
    return x+1
}

const ans = removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,5])

console.log(ans)
