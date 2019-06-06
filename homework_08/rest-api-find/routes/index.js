var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search', express.json(), async function (req, res, next) {
  try {    
    let result = await req.db.collection("cars").find({ location: { $near: [req.body.longitude,req.body.latitude ] } }).limit(3).toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
    next(new Error());
  }
});

module.exports = router;
