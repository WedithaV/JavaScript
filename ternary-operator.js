var x = (5 > 8) ? "5 is greater than 8" : "8 is greater than 5";
console.log(x);



//Multi ternary operators
function checkSign(num){
    return (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
}

console.log(checkSign(0));