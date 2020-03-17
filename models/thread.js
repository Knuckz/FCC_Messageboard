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
      dbResponse = await db.collection('threads').insertOne(...this)
    } catch(error) {
      throw error;
    }
    
    return dbResponse;
  }
}

module.exports = Thread;