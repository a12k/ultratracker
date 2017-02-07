var request = require('request');
var cheerio = require('cheerio');

module.exports = (uid) => {
	'use strict'
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
					location: '',
					eventdate: ''
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
				
				$('.event-date').filter(function() {
					var data = $(this);
					json.eventdate = data.text();
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