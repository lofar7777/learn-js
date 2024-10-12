const accountId = 132344
let accountEmail = "lokesh@gmail.com"
var accountPass = "12333322"
accountCity = "Bangluru"
let accountState;

// accountId = 542234552  // Not allowed 

console.log(accountId)
/* 
Prefer not to use var
because of issue in block scope
and functional scope
*/

console.table([accountEmail, accountPass, accountCity, 
    accountId, accountState])
