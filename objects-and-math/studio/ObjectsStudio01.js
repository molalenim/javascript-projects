// Code your selectRandomEntry function here:

function selectRandomEntry(arr) {
  // change to return 3 random numbers from the array
  let randomArray = [];
  let i = Math.floor(Math.random() * arr.length);
  randomArray.push(arr[i]);
  return randomArray;
}
// Code your buildCrewArray function here:
function buildAcrew(idArray, animalArray) {
  let selectedCrew = [];
  for (i = 0; i < animalArray.length; i++) {
    if (idArray.includes(animalArray[i].astronautID)) {
      selectedCrew.push(animalArray[i].name);
    }
    
  }
  return selectedCrew;
}


let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let animals = [
  candidateA,
  candidateB,
  candidateC,
  candidateD,
  candidateE,
  candidateF,
];

// Code your template literal and console.log statements:
// console.log(selectedCrew);
// todo call selectrandomentry to create array of 3 random IDs
let selectedCrewIDs = selectRandomEntry(idNumbers);
let announcementArray = buildAcrew(selectedCrewIDs, animals);
console.log(announcementArray[0]);

// console.log(
//   `${announcementArray[0]}, ${announcementArray[1]}, ${announcementArray[2]}, are going`
// );


