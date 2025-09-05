// amals method code

var reverseString = function(s) {
    let x = 0;
    let y = s.length - 1
    for(let i = 0;i<(s.length)/2;i++){
        x = s[i]
        s[i] = s[y]
        s[y] = x
        y--
    }
};

