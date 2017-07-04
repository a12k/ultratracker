let express = require('express');
let router = express.Router();
const search = require('../lib/search.js');

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to the api!' });
    console.log("'hooray! welcome to the api!'");
});

router.post('/:uid', function(req, res, next) {
  search(req.params.uid).then(function(json){
    res.json({
      title: 'Ultra Tracker', 
      raceid: json.uid,
      racetitle: json.racetitle, 
      spots: json.spots, 
      closes: json.closes, 
      location: json.location,
      date: json.eventdate
    });
    console.log(json);
  }, function(error) {
    res.json({ title: 'ERROR' });
  })
});

module.exports = router;
