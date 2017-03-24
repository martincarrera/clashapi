const clash = require('./index.js');


clash
  .chests()
  .then(d => d[0].idName)
  .then(clash.chests)
  .then(console.log)

