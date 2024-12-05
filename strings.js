var fName = "Weditha";
var sName = "Vishwa";

var name = fName+ " " +sName;
console.log(name);

//length of a string
console.log(name.length);

//string index access
var x = name[0];
console.log(x);


//string immutability
var fruit = "gapple";
// fruit[0] = "a";  because of string immutability we cannot use this method

//To edit the string we have to assign the correct value again
fruit = "apple";
console.log(fruit);