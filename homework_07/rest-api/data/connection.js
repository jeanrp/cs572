const { MongoClient } = require('mongodb');
const { promisify } = require('util');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const database = 'homework07';

function MongoDao(connectionUrl, database) {
    var _this = this;
    var options =
    {
        useNewUrlParser: true
    };

    _this.mongoClient = new MongoClient(connectionUrl, options);

    _this.mongoClient.connect(function (err, client) {
        if (err)
            return console.log("It was not possible connect to the database");

        console.log("mongo client succesfuly connected");
        _this.db = client.db(database);
        _this.lectures = _this.db.collection("lectures"); 
    });
}


module.exports = function () {
    try {
        let mongoDao = new MongoDao(connectionUrl, database);
        return mongoDao;
    } catch (err) {
        console("It was not possible to connect to the database");
    }
}();
