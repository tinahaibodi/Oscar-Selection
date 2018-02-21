#!/usr/bin/env node

// make sure that when you're using you update your NPM to the newest version and are running in a sudo virtualenv

'use strict';
var imdbRating = require('./');

var title = '';
if (process.argv.indexOf("-t") != -1) {
		var index;
    index = process.argv.indexOf("-t") + 1;

    for (var i=index; i<process.argv.length; i++) {
    	title += process.argv[i];

    	if (i != process.argv.length-1)
    	title += '+';	
    }
}
else {
	console.log('Please provide a name.');
  process.exit(1);	
}

imdbRating(title, function (err, res) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log('Rating: ' + res.rating + ' ['+ res.title +']');
});
