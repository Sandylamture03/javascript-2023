const name = "sandeep";
const repoCount = 50;

//console.log(name + repoCount + " value");  outdated way

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);  // string interpolation

const gameName = new String("Sandeep-l-com"); // another away to define string

console.log(gameName[0]); // S
console.log(gameName.__proto__); // {}

console.log(gameName.length); //13
console.log(gameName.charAt(2)); // n
console.log(gameName.indexOf('d')); // 3
console.log(gameName.toUpperCase()); // SANDEEP-L-COM

const newString = gameName.substring(0,4); 
console.log(newString); // Sand


const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "    sandeep    ";
console.log(newStringOne.trim()); //Sandeep


const url = "https://lco.com/sandeep%20lamture";
console.log(url.replace('%20','-')); //  https://lco.com/sandeep-lamture


console.log(url.includes('sandeep')); //true
console.log(url.includes('hitesh')); // false

console.log(gameName.split('-')); // [ 'Sandeep', 'l', 'com' ]