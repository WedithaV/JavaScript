var name = "Weditha";
var name = "Vishwa";

//Using var keyword can declare same variable twice
//But let keyword do not let u to do it

let game = " RDR2";
//let game = "Cod"; it gives an error


//scope

function checkScopeVar(){
    var x = "function";
    if(9 > 4){
        var x = "block";
        console.log(x);
    }
    console.log(x);
} 

checkScopeVar(); //block block

function checkScopeLet(){
    //let x = "function";
    if(9 > 4){
        let x = "block";
        console.log(x);
    }
    console.log(x);
}

checkScopeLet();  // block function



