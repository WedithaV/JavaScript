//Mutate an array declare with const

const nums = [1,2,3];

function changeArrayValues(){
    //nums = [4,5,6]; This can not be done due to "const" keyword

    //To mutate the array we can use bracket notation
    nums[0] = 4;
    nums[1] = 5;
    nums[2] = 6;
}

changeArrayValues();
console.log(nums);


//Imutate an object using const and object.freeze()

function freeseObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI : 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freeseObj();
console.log(PI);