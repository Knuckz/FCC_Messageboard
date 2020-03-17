const mongodb = require('mongodb');
const database = require('../util/database');

class thread {
  constructor(board, text, delete_password, replies) {
    this.board = board
    this.text = text;
    this.delete_password = delete_password;
    this.created_on = null;
    this.bumped_on = null;
    this.reported = false;
    this.replies = [...replies];
  }
  
  async save() {
    const db = database.getDb();
    let dbResponse;
    this.created_on = new Date();
    
    try {
      dbResponse = await db.collections('threads').insertOne(this)
    } catch(error) {
      throw error;
    }
    
    return dbResponse;
  }
}

module.exports = thread;