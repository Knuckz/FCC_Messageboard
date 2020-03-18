const mongodb = require('mongodb');
const database = require('../util/database');

class Thread {
  constructor(board, text, delete_password) {
    this.board = board
    this.text = text;
    this.delete_password = delete_password;
    this.created_on = null;
    this.bumped_on = null;
    this.reported = false;
    this.replies = [];
  }
  
  async save() {
    const db = database.getDb();
    let dbResponse;
    this.created_on = new Date();
    try {
      dbResponse = await db.collection('threads').insertOne(this)
    } catch(error) {
      throw error;
    }
    
    return dbResponse;
  }
  
  static async insertReply(idToUpdate, reply) {
    const db = database.getDb();
    let response;
    
    try {
      if (!!reply && idToUpdate) {
        console.log('idtoupdate: ', idToUpdate);
        console.log('reply: ');
        console.log(reply);
        response = await db.collection('threads')
          .findOneAndUpdate({ _id: mongodb.ObjectId(idToUpdate) }, { bumped_on: new Date(), $push: { "replies": reply }})  
      }
    } catch(error) {
      throw error;
    }
    
    return response;
  }
}

module.exports = Thread;