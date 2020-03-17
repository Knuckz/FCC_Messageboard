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
      if (dbResults.ops[0].thread_id) {
        updateThreadResults = await Thread.updateBumpTime(this.thread_id);
      }
    } catch(error) {
      throw error;
    }
  }
}

module.exports = reply;