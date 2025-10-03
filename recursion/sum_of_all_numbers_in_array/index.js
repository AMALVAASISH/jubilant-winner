// for all numbers

// const arr = [5,3,2,0,1]

// function sum(n){
//     if(n == 0) return arr[0]
//     return arr[n] + sum(n - 1)
// }

// const ans = sum(arr.length - 1)
// console.log(ans)


// sum of all odd numbers in an array

const arr = [5,2,0,3,6,7]

function sum(n){
    if(n<0) return 0
    if(arr[n]%2 != 0){
        return arr[n] + sum(n-1)
    }else{
        return 0 + sum(n-1)
    }

}

const ans = sum(arr.length - 1)
console.log(ans)
