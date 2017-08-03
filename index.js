var getJSON = require('./getjson');

getJSON("http://online.stationf.co/tests/rooms.json").then(function(salles) {
  console.log(salles);
}).catch(function(err) {
  console.error(err);
});
