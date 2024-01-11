let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// 3) Write conditional expressions to satisfy the following safety rules:

 
// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
// this uses the compound boolean expression with LOGICAL AND
if (crewStatus){
    console.log("Crew Ready");
 } else{
    console.log("Crew Not Ready");
 }

// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
//computer status code
if (computerStatusCode === 200){    //I wonder why I had to explicitly state that computerstatus === 200 because it already has a value of 200 with it was inialized
    console.log("Please stand by. Computer is rebooting.");
 } else if (computerStatusCode === 400){
    console.log("Success! Computer online");
 } else {
    console.log("ALERT: Computer offline!");
 }

// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
//shuttle speed
if (shuttleSpeed > 17500){
    console.log("Alert: Escape velocity reached!");
 } else if (shuttleSpeed < 8000){
     console.log("ALERT: Cannot maintain orbit!");
 } else{
    console.log("Stable speed.");
 }

// 4) PREDICT: Do the code blocks shown in the 'predict.txt' file produce the same result?
 
// I predict Yes! The Logical OR only needs one of the compound expression to be true.

if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }
 
 //or
 
 if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }

console.log(/* "Yes" or "No" */);
