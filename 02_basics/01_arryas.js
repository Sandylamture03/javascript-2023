// Array's

const myArr = [0,1,2,3,4,5,];
const myHeros = ["iron-man","hankok","super-man"];

const myArr2 = new Array(1,2,3,4);

// console.log(myArr[0]); // 0
// console.log(myHeros[1]); // hankok
// console.log(myArr[2]); // 2

// Arrays Method's

// myArr.push(6);
// myArr.push(7);
// myArr.pop();
//console.log(myArr); // 6 and 7 gets added

// myArr.unshift(9); // addes to front
// myArr.shift(); // removes from front
//console.log(myArr); // 9 gets added at the beginning

//console.log(myArr.includes(9)); // checks if 9 is available or not in the Array if no the print boolean value false if yes then true
//console.log(myArr.indexOf(3)); // prints index of number 3 in he array which is 3

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr); 

//console.log(myArr);



// Slice , Splice

console.log("A", myArr); //A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3); // in slice from myArr on index 1 , 2 gets added not last vale from slice as well and printed [1,2]

console.log(myn1); // [ 1, 2 ]
console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3); //  in splice from original myArr index of 1,2,3 get cut from original array and print seperately link [1,2,3] and main array gets manipulated here it will become [0,4,5]
console.log("c", myArr); // c [ 0, 4, 5 ]
console.log(myn2);  // [ 1, 2, 3 ]











