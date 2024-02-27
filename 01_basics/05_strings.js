const name = "sandeep";
const repoCount = 50;

//console.log(name + repoCount + " value");  outdated way

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);  // string interpolation

const gameName = new String("Sandeep-l-com"); // another away to define string

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4);
console.log(newString);


const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "    sandeep    ";
console.log(newStringOne.trim());


const url = "https://lco.com/sandeep%20lamture";
console.log(url.replace('%20','-'));


console.log(url.includes('sandeep'));
console.log(url.includes('hitesh'));

console.log(gameName.split('-'));