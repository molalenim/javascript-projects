//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.


const input = require('readline-sync');
let startingFuelLevel = 0;
let astronautNumber = 0;
let shuttleAltitude = 0;


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */


   startingFuelLevel = Number(input.question("Is the starting fuel level between 5000-30000: "));
  
  while (startingFuelLevel < 5000 || startingFuelLevel > 30000 || isNaN(startingFuelLevel)) {
     startingFuelLevel = Number(input.question("invalid! Number must be greater than 5000 and less than 30000: "));

  }
console.log("That is a valid fuel level");

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  
astronautNumber = Number(input.question("are the number of astronauts between 1-7: "));
  
while (astronautNumber < 1 || astronautNumber > 7 || isNaN(astronautNumber)) {
   astronautNumber = Number(input.question("invalid! Number must be greater than 1 and less than 7: "));

}
console.log("That is a valid number of astronauts");
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuelLevel - 100 * astronautNumber >= 0) {
  shuttleAltitude += 50;
  startingFuelLevel -= 100 * astronautNumber;
  if (startingFuelLevel === 0) {
    console.log("there is not enough fuel to boost the crew another 50 km");
    break
  }
  }

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (shuttleAltitude >= 2000)  {
  console.log(`The shuttle gained an altitude of ${shuttleAltitude} km. Orbit achieved`);
  
}else{
  console.log(`The shuttle only gained an altitude of ${shuttleAltitude} km. Failed to reach orbit.`);
}