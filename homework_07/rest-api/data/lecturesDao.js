const util = require('util');
const { ObjectID } = require('mongodb');

let getLectureById = function (id, callback) {
    DB.lectures.findOne({ _id: new ObjectID(id) }, callback);
}

let getLectures = function (callback) {
    return DB.lectures.find().toArray(callback);
}

let addLecture = function (lecture, callback) {
    DB.lectures.insertOne(lecture, callback);
}

let deleteLecture = function (id, callback) {
    DB.lectures.deleteOne({ _id: new ObjectID(id) }, callback);
}

let getLectureByParam = function (param, callback) {
    DB.lectures.find({ lecture: { $regex: param } }).toArray(callback);
}

module.exports = {
    getLectureById: util.promisify(getLectureById),
    getLectures: util.promisify(getLectures),
    getLectureByParam: util.promisify(getLectureByParam),
    addLecture: util.promisify(addLecture),
    deleteLecture: util.promisify(deleteLecture)
}
