var array =["Weditha", 23, 170.3];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);


//Two diamentional arrays

var twoDArray = [
    ["Weditha",23],
    ["Kivindu", 19]
];

console.log(twoDArray[1][0]);


twoDArray[1][0] = "Vishwa";
console.log(twoDArray[1][0]);


//Append data end of an array using push()
var games = ["COD", "RDR2"];
games.push("Farcry");
console.log(games[2]);

//Remove the last items from an array using pop();
var removedItem = games.pop();
console.log(removedItem);

//Remove the first item in an array using shift();
removedItem = games.shift();
console.log(removedItem);

//Add item to the starting point of an array
games.unshift("Crysis");
console.log(games[0]);
