var request = require('request');
var cheerio = require('cheerio');

module.exports = () => {
	return new Promise(function(resolve, reject) {
		var url = 'https://ultrasignup.com/register.aspx?did=41381';

		request(url, function(error, response, html){
			if(!error){
				
				var $ = cheerio.load(html);

				var title, release, rating;
				var json = { spots : "", closes: "", title: ""};

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
					json.title = data.text();
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