const mongodb = require('mongodb');
const database = require('../util/database');
const Thread = require('./thread');

class reply {
  constructor(thread_id, text, delete_password) {
    this.thread_id = mongodb.ObjectId(thread_id);
    this.text      = text;
    this.delete_password = delete_password;
  }
  
  async save() {
    const db = database.getDb();
    let dbResults;
    let updateThreadResults;
    try {
      dbResults = await db.collection('replies').insertOne(this);
      updateThreadResults = await Thread.insertReply(this.thread_id, dbResults.ops[0]);
    } catch(error) {
      throw error;
    }
    
    return dbResults;
  }
  
  static async getReplies(thread_id) {
    const db = database.getDb();
    let dbResults;
    try {
      dbResults = await db.collection('replies').find({ thread_id: new mongodb.ObjectId(thread_id) }).toArray();
    } catch(error) {
      throw error;
    }
    return dbResults;
  }
}

module.exports = reply;