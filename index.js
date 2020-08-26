const { nextISSTimesForMyLocation } = require('./iss');

const printResult = function(data) {
  for (const value of data) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(value.risetime);
    const seconds = value.duration;
    console.log(`Next pass at ${datetime} for ${seconds} seconds!`);
  }
};
  
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printResult(passTimes);
});