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


//Coding challenge

var collection = {
    "1" : {
        "album" : "Slippery When Wet",
        "artist" : "Bon Jovi",
        "tracks" : ["Let It Rock", "You Give Love a Bad Name"]
    },

    "2" : {
        "album" : "1999",
        "artist" : "Prince",
        "tracks" : ["1999", "Little Red Corvette"]
    },

    "3" : {
        "artist" : "Robert Palmer",
        "tracks" : []
    },

    "4" : {
        "album" : "ABBA Gold"
    }

};


var collectioncopy = JSON.parse(JSON.stringify(collection));

function updateRecord(id, prop, value){
    if(value === ""){
        delete collection[id][prop];  //it is better to use bracket notation. dot notation gives errors
    }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        //if array is exist it is assign to itself 
        //if array is not exist create an empty array
        collection[id][prop].push(value);
    }else {
        collection[id][prop] = value;
    }

    return collection;
}

console.log(updateRecord("1","tracks","dtx"));
console.log(updateRecord("4","tracks", "hello"));





