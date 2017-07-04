let request = require('request');
let cheerio = require('cheerio');

module.exports = (uid) => {
	'use strict'
	return new Promise(function(resolve, reject) {
		//let id = '41381' //to be built with body request
		let url = 'https://ultrasignup.com/register.aspx?did=' + uid;
		let json = { 
			uid: uid,
			spots : '', 
			closes: '', 
			racetitle: '', 
			location: '',
			eventdate: ''
		};

		request(url, function(error, response, html){
			if(!error){
				
				let $ = cheerio.load(html);

				$('.spots-remaining').filter(function() {
					let data = $(this);
					json.spots = data.text();
				})

				$('#ContentPlaceHolder1_EventInfo1_lblRegistrationStatus').filter(function() {
					let data = $(this);
					json.closes = data.text();
				})

				$('.event-title').filter(function() {
					let data = $(this);
					json.racetitle = data.text();
				})

				$('.subtitle').filter(function() {
					let data = $(this);
					json.location = data.text();
				})
				
				$('.event-date').filter(function() {
					let data = $(this);
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