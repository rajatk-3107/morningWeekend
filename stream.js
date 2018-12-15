var fs = require("fs");

var data = '';

// Create a readable stream

var readerStream = fs.createReadStream('words.txt');

// Set the encoding to be utf8. 

readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error

readerStream.on('data', function(chunk) {

    data += chunk;
    console.log(data, '---------------------------------------------', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n');

});

readerStream.on('end', function() {

    console.log("ended");

});

readerStream.on('error', function(err) {

    console.log(err.stack);

});

console.log("Program Ended");