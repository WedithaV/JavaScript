//Use Arrow functions to write concise anonymous functions

//Anonymous Functions
var magic = function(){  //function has no name
    return new Date();
};

//convert anonymous function -> arrow function
var magic = () => {
    return new Date();
};

//We can simplyfy it more if it return one value
var magic = () => new Date();


//parsing arguments in arrow functions
var add = (a, b) => a+b;
console.log(add(3,5));


//passing function as an argument

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0)
    .map(x => x*x);
    return squaredIntegers;
}

const squaredIntegers =squareList(realNumberArray);
console.log(squaredIntegers);



//Default arguments
const sub = (a = 1, b = 2) => a - b;
console.log(sub());
console.log(sub(9,0));