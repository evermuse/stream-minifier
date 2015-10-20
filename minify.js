var fs = require('fs');
var Transform = require('stream').Transform;
var inherits = require('util').inherits;

//grab the arguments from the command line

var args = process.argv.slice(2);

//extend the Transform class

function MinifyStream(options) {

  Transform.call(this);

}
inherits(MinifyStream, Transform); //short-form way of extending a class and complete inheritance

//modifies the transform method on our version of the Class to peform our desired functionality

MinifyStream.prototype._transform = function (chunk, enc, done) {

  chunk = chunk.toString().replace(/\r?\n|\r/g, ''); //does the minifying

  this.push(chunk);
  done();

};

//read the arguments from the command line if formatted correctly or offer usage help if not

if (args[0] === '--input' && args[2] === '--output') {

  var readFile = fs.createReadStream(args[1]);

  var writeFile = fs.createWriteStream(args[3]);

  readFile.pipe(new MinifyStream()).pipe(writeFile);

} else {

  console.log('Stream Minifier (c) Bryan Alexander\n\nusage:\n\n--input [filename] --output [filename]');

}