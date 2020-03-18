const mongodb = require('mongodb');
const database = require('../util/database');
const Thread = require('./thread');

class reply {
  constructor(thread_id, text, delete_password) {
    this.thread_id = thread_id;
    this.text      = text;
    this.delete_password = delete_password;
  }
  
  async save() {
    const db = database.getDb();
    let dbResults;
    let updateThreadResults;
    try {
      dbResults = await db.collection('replies').insertOne(this);
      console.log(dbResults.ops[0]);
      updateThreadResults = await Thread.insertReply(this.thread_id, dbResults.ops[0]);
    } catch(error) {
      throw error;
    }
    
    return dbResults;
  }
}

module.exports = reply;