// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
//  console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); //1710428417634
console.log(myCreatedDate.getTime()); //1673654400000

console.log(Math.floor(Date.now()/1000)); // 1710428616 , converted in seconds

let newDate1 = new Date()
console.log(newDate1.getMonth()+1);  // remember month's starts with 0
console.log(newDate1.getDay());


console.log(newDate1.toLocaleString('default',{
    weekday:"long"
}));  // Thursday
 