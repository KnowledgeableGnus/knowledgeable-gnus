var populateDatabase = function(coords) {
  for (var i  = 0; i < coords.length; i++) {
    var params = [1, coords[i][2], coords[i][0], coords[i][1]];
    models.coordinates.post(params, function(err, results) {
      if (err) {
        console.log('error: ', err);
      }
    });
  }
}

var randomCoordinates = function(seedLat, seedLong) {
  var obj = {};
  obj.startLat = seedLat + Math.random() / 10;
  obj.startLong = seedLong + Math.random() / 10;
  obj.endLat = seedLat + Math.random() / 10;
  obj.endLong = seedLong + Math.random() / 10;

  return obj;
}

var mockData = function(centralLat, centralLong, startingTime) {
  var numPoints = Math.ceil(Math.random() * 6);
  var coords = [];
  var rand;
  for (var i = 0; i < numPoints; i++) {

    //Stub points along path from one location to another
    rand = randomCoordinates(centralLat, centralLong);
    coords = coords.concat(geo.interpolatePoints(rand.startLat, rand.startLong, rand.endLat, rand.endLong, 100));

    //Stub cluster of points at each location
    for (var j = 0; j < 24 + Math.random() * 96; j++) {
      coords.push([endLat + (Math.random() / 1000), endLong + (Math.random() / 1000)]);
    }
  }

  //Add Epoch time values for each coordinate
  for (var i = 0; i < coords.length; i++) {
    coords[i].push(startingTime + 300 * i);
  }

  populateDatabase(coords);

  return coords;
}

module.exports = {
  populateDatabase: populateDatabase,
  randomCoordinates: randomCoordinates,
  mockData: mockData
}
