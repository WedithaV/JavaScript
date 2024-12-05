var myDog = {
    "name" : "Tommy",
    "legs" : 4,
    "tails" : 1,
    "names of friends" : ["rexy","jenny"]
};


//Accessing object properties

//dot notation
console.log(myDog.name);
console.log(myDog.legs);

//Bracket notation (if key values have spaces we use this method)
console.log(myDog["names of friends"]);


//Update object properties
myDog.name = "Coder";
console.log(myDog.name);

//Add a new property
myDog.bark = "woof!";
console.log(myDog.bark);
myDog["breed"] = "GermanShepard";
console.log(myDog.breed);

//Delete properties from an object
delete myDog.tails;
console.log(myDog.tails);


//Check whether object has the property or not
var human = {
    "name" : "Weditha",
    "age" : 24,
};

function checkObj(obj, prop){
    if(obj.hasOwnProperty(prop)){
        console.log(obj[prop]);
    }
    else{
        console.log("Not found");
    }
}

checkObj(human,"d");

//Manipulating complex objects
var myMusic = [
    {
        "artist" : "Billy Joel",
        "title" : "Piano Man",
        "release_year" : 1973,
        "fotmats" : ["CD","8T","LP"],
        "gold" : true
    },
    {
        "artist" : "Beau Carnes",
        "title" : "Cereal Man",
        "release_year" : 2003,
        "formats" : ["youtube video"],
        "gold" : true
    }
];

console.log(myMusic[0]);
console.log(myMusic[0].artist);


//Nested objects

var myStorage = {
    "car" : {
        "inside" : {
            "glove box" : "maps",
            "passenger seat" : "crumbs"
        },
        "outside" : {
            "trunk" : "jack"
        }
    }
};

console.log(myStorage.car.inside["glove box"]);





