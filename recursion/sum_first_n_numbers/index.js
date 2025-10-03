function sum(n){
    if(n == 0) return 0
    return n + sum(n-1)
}

const ans = sum(5)
console.log(ans)

