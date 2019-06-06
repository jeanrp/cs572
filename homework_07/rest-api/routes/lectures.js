var express = require('express');
var lectureDao = require('../data/lecturesDao');
const { ObjectID } = require('mongodb');
var router = express.Router();

router.get('/', async function (req, res, next) {
  try {
    let results = await lectureDao.getLectures();
    res.json(results);
  } catch (error) {
    let err = new Error("It was not possible to get the lectures");
    err.status = 500;
    next(err);
  }
});

router.get('/search/:q', async function (req, res, next) {
  try {
    let result = await lectureDao.getLectureByParam(req.params.q);
    res.json(result);
  } catch (error) {
    let err = new Error("It was not possible to get the lectures");
    err.status = 500;
    next(err);
  }
})

router.get('/:id', async function (req, res, next) {
  try {
    let result = await lectureDao.getLectureById(req.params.id);
    console.log(result);
    res.json(result);
  } catch (error) {
    let err = new Error("It was not possible to get the specified lecture");
    err.status = 500;
    next(err);
  }
});

router.post('/', express.json(), async function (req, res, next) {
  var lecture = req.body;

  try {
    let result = await lectureDao.addLecture(lecture);
    res.json(result);
  } catch (error) {
    let err = new Error("It was not possible to add a new lecture");
    err.status = 500;
    next(err);
  }

});

router.delete('/:id', async function (req, res, next) {
  try {
    let result = await lectureDao.deleteLecture(req.params.id);
    res.json(result);
  } catch (error) {
    let err = new Error("It was not possible to delete the lecture");
    err.status = 500;
    next(err);
  }
});

module.exports = router;

