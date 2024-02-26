const accountId = 144553
let accountEmail = "sandylamture@gmail.com"
var accountPassword = "P@55w0rd"
accountCity = "Mumbai"

// accountId = 20 // not allowed.

accountEmail = "hc@hc.com"
accountPassword = "121212"
accountCity = "Pune"

let accountState;

console.log(accountId);

/*
  prefer not to use var 
  beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])