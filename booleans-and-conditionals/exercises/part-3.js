let engineIndicatorLight = 'red blinking';
let fuelLevel = 21000;
let engineTemperature = 1200;

/* 5) Implement the following checks using if/else if/else statements:

a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."

b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above 50%.  Engines good."

c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."

d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."

e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!" 

f) Otherwise, print "Fuel and engine status pending..." */

// Code 5a - 5f here:

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending..."); 
  }
// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.
let commandOverride = true;

if (commandOverride === false || fuelLevel > 5000 && engineTemperature <=2500) {
    console.log("Launch");
    if (commandOverride === true){
       console.log("Launch");
    }
    
  }
/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */

if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOverride === true){
    console.log("Cleared to launch!");
} else {
    console.log("Launch scrubbed!");
}








// let fuelLevel = 21000; 
// let engineTemperature = 1200;
// 

// if (fuelLevel === 21000 && engineIndicatorLight !== "Not red blinking" && engineTemperature <= 1200) {
//    console.log("Full tank. Engine good.");
// } else if (fuelLevel >= 18000 && engineIndicatorLight !== "Not red blinking"  && engineTemperature <= 2500) {
//    console.log("Fuel level above 50%. Engines good.");
// } else if (fuelLevel >= 12000 && engineIndicatorLight !== "Not red blinking" && engineTemperature <= 2600) {
//    console.log("Check fuel level. Engine is running hot.");
// } else if (fuelLevel >= 5000 && engineIndicatorLight !== "Not red blinking" && engineTemperature <= 1200) {
//    console.log("Check fuel level. Engine is running hot.");
// } else if (fuelLevel >= 900 && engineIndicatorLight !== "Not red blinking" && engineTemperature >= 1200) {
//    console.log("ENGINE FAILURE IMMINENT!");
// } else {
//    console.log("ENGINE FAILURE IMMINENT!");
// }


// I don't quite understand why I was given that table to try. anyway the code is above:




