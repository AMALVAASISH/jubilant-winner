function fac(num){
    if(num == 1) return 1
    return num * fac(num - 1)
}

const ans = fac(5)
console.log(ans)