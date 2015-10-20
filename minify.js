var fs = require('fs');
var Transform = require('stream').Transform;
var inherits = require('util').inherits;

var args = process.argv.slice(2);

function MinifyStream(options) {

  Transform.call(this);

}
inherits(MinifyStream, Transform);

MinifyStream.prototype._transform = function (chunk, enc, done) {

  chunk = chunk.toString().replace(/\r?\n|\r/g, '');

  this.push(chunk);
  done();

};

if (args[0] === '--input' && args[2] === '--output') {

  var readFile = fs.createReadStream(args[1]);

  var writeFile = fs.createWriteStream(args[3]);

  readFile.pipe(new MinifyStream()).pipe(writeFile);

} else {

  console.log('Stream Minifier (c) Bryan Alexander\n\nusage:\n\n--input [filename] --output [filename]');

}