var fs = require('fs');
var Transform = require('stream').Transform;

var args = process.argv.slice(2);

function MinTransform(options) {

  Transform.call(this, options);

}

if (args[0] === '--input' && args[2] === '--output') {

  var readFile = fs.createReadStream(args[1]);

  var writeFile = fs.createWriteStream(args[3]);

  //readFile.pipe(writeFile);

} else {

  console.log('not formatted correctly');

}