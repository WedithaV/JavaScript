function myName(){
    console.log("Hello Weditha");
}
myName();


function add(a,b){
    console.log(a+b);
}
add(4,5);

//Global and Local scope in functions
var x = 11;  // Global

function display(){
    console.log(x);
    y = 22; //Global
    var z = 33; // Local
    console.log(y);
    console.log(z);
}

display();
console.log(y);
//console.log(z); cannot access because z is a local variable

//Global vs Local variables in functions
var dress = "shirt";
function dname(){
    var dress = "blouse";
    console.log(dress);
}
dname();
console.log(dress);

//return
function sub(num1,num2){
    return num1 - num2;
}
console.log(sub(9,3));

//Example

function nextLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var nums = [1,2,3,4,5];
console.log("Before "+JSON.stringify(nums));
console.log(nextLine(nums,6));
console.log("After : "+JSON.stringify(nums));

