var getNoZeroIntegers = function(n) {
    let i = 0
    let x = 0
    let y = 0
    let arr = []
    for(i = 0;i<n;i++){
        x = n - i
        y = n - x
        let a = String(x).split('')
        console.log(a)
        let b = String(y).split('')
        console.log(b)
        if(a.includes('0') || b.includes('0')){
            console.log('continue')
            continue
        }else{
            console.log('break')
            break
        }
    }
    return [x,y]
};


const ans = getNoZeroIntegers(2)
console.log(ans)

// let a = ['2', '0']
// console.log(String(a).includes('0'))