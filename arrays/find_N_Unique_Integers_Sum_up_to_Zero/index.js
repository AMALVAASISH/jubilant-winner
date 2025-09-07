
var sumZero = function(n) {

    if (n == 1){
        return [0]
    }
    let arr = []
    for(let i = 1;i<=Math.floor(n/2);i++){
        // x = Math.floor(Math.random() * 10)
        arr.push(i,-i)
    }
    if(n%2 == 0){
        return arr
    }else{
        arr.push(0)
        return arr
    }
};


const ans = sumZero(3)
console.log(ans)