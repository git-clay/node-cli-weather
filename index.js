
var apiKey = {
	key: '0c73a552dda0ea37'
};

var request = require('request');
request('http://api.wunderground.com/api/'+apiKey.key+'/conditions/q/CO/Denver.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})