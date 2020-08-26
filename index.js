const { fetchMyIP,fetchCoordsByIP,fetchISSFlyOverTimes } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});


fetchCoordsByIP("174.112.150.86",(error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log(`It worked! Returned latitude :  ${data.latitude} & longitude :${data.longitude}`);
});

fetchISSFlyOverTimes({ latitude: '43.81560', longitude: '-79.45340' },(error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log("_______________Pass time__________________\n" , data);
});