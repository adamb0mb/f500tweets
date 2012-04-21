var twitter = require('ntwitter');
var credentials = require('./credentials.js');

var t = new twitter({
	consumer_key: credentials.consumer_key,
	consumer_secret: credentials.consumer_secret,
	access_token_key: credentials.access_token_key,
	access_token_secret: credentials.access_token_secret
    });

t.stream(
	 'statuses/filter',
	 { track: ['Google'] },
	 function(stream) {
	     stream.on('data', function(tweet) {
		     console.log('id: ' +tweet.id + 'created at: ' + tweet.created_at + 'user name: ' + tweet.user.name + 'text: ' + tweet.text);
		 });
	 }
);