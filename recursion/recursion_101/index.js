// function fun(num){
//     if(num == 0) return ; // this is the base condition
//     console.log(num)
//     num--
//     fun(num)
// }

// a = 5
// fun(a)


// =========== print 1 to n ====
// i used lexical scope idea, check akshays code also


// let i = 1

// function print(num){
//     if(i > num) return
//     console.log(i)
//     i++
//     print(num)
// }

// print(6)


// akshays code

let n = 10
function print(x){
    if(x>n){return}
    console.log(x)
    print(++x)
}

print(1)