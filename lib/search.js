var request = require('request');
var cheerio = require('cheerio');

module.exports = (uid) => {
	return new Promise(function(resolve, reject) {
		//var id = '41381' //to be built with body request
		var url = 'https://ultrasignup.com/register.aspx?did=' + uid;

		request(url, function(error, response, html){
			if(!error){
				
				var $ = cheerio.load(html);

				var title, release, rating;
				var json = { 
					spots : '', 
					closes: '', 
					racetitle: '', 
					location: ''
				};

				$('.spots-remaining').filter(function() {
					var data = $(this);
					json.spots = data.text();
				})

				$('#ContentPlaceHolder1_EventInfo1_lblRegistrationStatus').filter(function() {
					var data = $(this);
					json.closes = data.text();
				})

				$('.event-title').filter(function() {
					var data = $(this);
					json.racetitle = data.text();
				})

				$('.subtitle').filter(function() {
					var data = $(this);
					json.location = data.text();
				})

			}
			if(json){
				resolve(json);
			} else {
				reject('it broke :(');
			}
		})
	})
}