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