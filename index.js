'use strict';
var got = require('got');
var api = 'http://www.omdbapi.com/?t=';

// OMDBAapi is a open source movie database that scrapes the data for you 

module.exports = function (title, cb) {
	api += title +'&y=&plot=short&r=json';
	got(api, function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		data = JSON.parse(data);
			if (data.Response == 'False') {
			cb({message: data.Error});
			return;
		}

// will show rating and votes data processed through terminal
		cb(null, {
			rating: data.imdbRating +' / '+ data.imdbVotes +' votes ',
			title: data.Title
		});
	});
};
