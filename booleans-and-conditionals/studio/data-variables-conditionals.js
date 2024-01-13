// Initialize Variables below
let date = "Date: Monday 2019-03-18";
let time = "Time: 10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount === 7) {
    console.log("Ok! Total number of astronauts does not exceed 7.");
} else if (astronautCount > 7) {
    console.log("Sorry! Number of astronauts cannot exceed 7.");
} else { 
    console.log("Sorry! There are no astronauts.");
}

// add logic below to verify all astronauts are ready

if (astronautStatus === "ready") {
    console.log("All Astronauts are ready");    
} else {
     console.log("Astronauts not ready"); 
}   

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg <= maximumMassLimit) {
    
    console.log("Total mass does not exceed the maximum limit of 850000");
} else {
    console.log("The total mass exceeds the maximum limit of 850000");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius > maximumFuelTemp || fuelTempCelsius < minimumFuelTemp) {
    console.log("Fuel temperature is not within appropriate range");
} else {
    console.log("Fuel temperature is with in appropriate range");
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel === 100) {
    console.log("There is enough fuel");    
} else {
    console.log("There is not enough fuel");
}

// add logic below to verify the weather status is clear

if (weatherStatus === "clear") {
    console.log("D: The weather is clear");    
} else {
    console.log("d: The weather is not clear");
}


// Verify shuttle launch can proceed based on above conditions

if (astronautStatus === "ready" && totalMassKg <= maximumMassLimit && (fuelTempCelsius < maximumFuelTemp || fuelTempCelsius > minimumFuelTemp) && fuelLevel === 100 && weatherStatus === "clear" && preparedForLiftOff){
    console.log("Shuttle launch is a Go!");
} else {
    console.log("Shuttle lauch is not a Go! \n");
}

// I don't understand why my if statement is falls to initiate the else block

console.log("All systems are a go! Initiating space shuttle Launch sequence.");
console.log("---------------------------------------------------------------");
console.log(date);
console.log(time);
console.log("Astronaut Coutnt: " + astronautCount);
console.log("Crew Mass:", crewMassKg ,"kg");
console.log("Fuel Mass:", fuelMassKg ,"kg");
console.log("Shuttle Mass:", shuttleMassKg ,"kg");
console.log("Total Mass:", totalMassKg ,"kg");
console.log("Fuel Temperature:", fuelTempCelsius ,"°C");
// console.log("Fuel Level:", fuelLevel);
console.log("Weather Status:", weatherStatus);
console.log("---------------------------------------------------------------");
console.log("Have a safe trip astronauts!\n");


















