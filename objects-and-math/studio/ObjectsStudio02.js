// Code your orbitCircumference function here:

function calculateCircumference(radius) {
  let Circumference = 2 * Math.PI * radius;
  return Math.round(Circumference);
}
console.log(calculateCircumference(3));
console.log(calculateCircumference(100));

// Code your missionDuration function here:

//Define the missionDuration function to take three parameters - the number of orbits completed, the orbit radius, and the orbital speed. Set the default radius to 2000 km and the default orbital speed to 28000 km/hr.≈
//Calculate how long it will take our animals to complete a certain number of orbits (time = distance/speed). Round the answer to 2 decimal places, then return the result. For example, with the default radius and speed, 5 orbits will take about 2.24 hours.




function missionDuration (orbitsCompleted, orbitRadius = 2000, orbitalSpeeed = 2800){
  let time = (2 * Math.PI * orbitRadius * orbitsCompleted) /orbitalSpeeed;
  time = time.toFixed(2);
  return time;
}

let orbits = 5;
let result = missionDuration(orbits);
console.log(`The mission duration for ${orbits} orbits is ${result} hours.`);


// Copy/paste your selectRandomEntry function here:


// Code your oxygenExpended function here:


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 