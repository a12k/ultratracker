let express = require('express');
let router = express.Router();
const scrape = require('./ultra.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  scrape().then(function(json){
    res.render('index', { title: json.title, spots: json.spots, closes: json.closes });
  }, function(error) {
    res.render('index', { title: 'ERROR', test: 'ERROR' });
  })
});

module.exports = router;
