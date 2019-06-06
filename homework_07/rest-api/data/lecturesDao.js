const { ObjectID } = require('mongodb');

let getLectureById = function (id) {
    return DB.lectures.findOne({ _id: new ObjectID(id) });
}

let getLectures = function () {
    return DB.lectures.find().toArray();
}

let addLecture = function (lecture) {
    return DB.lectures.insertOne(lecture);
}

let deleteLecture = function (id) {
    return DB.lectures.deleteOne({ _id: new ObjectID(id) });
}

let getLectureByParam = function (param) {
    return DB.lectures.find({ lecture: { $regex: param } }).toArray();
}

module.exports = {
    getLectureById: getLectureById,
    getLectures: getLectures,
    getLectureByParam: getLectureByParam,
    addLecture: addLecture,
    deleteLecture: deleteLecture
}




