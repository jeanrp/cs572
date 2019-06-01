var express = require('express');
const axios = require('axios');
const { from } = require('rxjs');

const URL = "https://randomuser.me/api/?results=10";

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  console.log(req.headers);
  res.set('Link', '<https://randomuser.me/api/?results=1>; rel=first, <https://randomuser.me/api/?results=20>; rel=twentieth');
  let obs$ = from(axios.get(URL));
  obs$.subscribe(dt => {
    res.json(dt.data.results);
  });

});

module.exports = router;
