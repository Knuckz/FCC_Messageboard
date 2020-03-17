const mongodb = require('mongodb').MongoClient;

class databaseUtil {
  constructor() {
    this._db = null;
  }
  
  mongoConnect(callback) {
    mongodb.connect(process.env.MONGO_URI)
    .then(client => {
      console.log('Connected to database');
      // For older version of mongo they need the db name, can be found oQn atlas by lookingi n collections, 
      // connection string is also different for this older version compared to the newer versions of mongo.
      // You can pass it in the connect function as { dbName: 'test' } as well.
      this._db = client.db('test');
      callback();
    })
    .catch(error => {
      console.error(error);
      throw error;
    })
  }
  
  getDb() {
    if (this._db) {
      return this._db;
    }
    throw 'No database found!';
  }
}

module.exports = new databaseUtil();