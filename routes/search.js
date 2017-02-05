let express = require('express');
let router = express.Router();
const search = require('../lib/search.js');

router.post('/', function(req, res, next) {
  search(req.body.uid).then(function(json){
    res.render('result', { 
      title: 'Ultra Tracker', 
      racetitle: json.racetitle, 
      spots: json.spots, 
      closes: json.closes, 
      location: json.location 
    });
  }, function(error) {
    res.render('result', { title: 'ERROR' });
  })
});

module.exports = router;
