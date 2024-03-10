// kis taraha say data ko memory me rakha jata hai aur access kiya jata hai , baised on that data types are categorized in
//primitive and Non-premitive

// # primitive datatypes : call by value 

// 7 types:
// string, number, boolen,null,undefined,symbol,bigInt

// reference type / Non primitive
// Array,objects,functions

const heros = ["shaktiman", "junior-G","hatim"]; // Array

let myObj = {        // object
    name: "sandeep",
    age: 30,
    gender: "Male",
}

const myFunction = function(){   // function
    console.log("hellow world");
}

console.log(typeof myObj);  // typeOf 



// Return type of variables in JavaScript  by using typeOf method
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function

//        Object  =>  object


//********************************************************************* */
// Memory

// stack (primitive), Heap (non-primitive)

let myYoutubeName = "chai aur code";
let anotherName = myYoutubeName;
anotherName = "Hitesh choudhari"

console.log(anotherName); // Hitesh choudhari
console.log(myYoutubeName); // chai aur code

let userOne = {
    name: "sandeep",
    age: 30,
    email: "sandy@mi.com"
}

let userTwo = userOne ;

userTwo.email = "sandeep@tcs.com"

console.log(userOne.email); //  sandeep@tcs.com
console.log(userTwo.email); //  sandeep@tcs.com



