const mongodb = require('mongodb');
const database = require('../util/database');

class thread {
  constructor(text, delete_password, created_on, bumped_on, reported, replies) {
    this.text = text;
    this.delete_password = delete_password;
    this.created_on = null;
    this.bumped_on = null;
    this.reported = false;
    this.replies = [];
  }
  
  async save() {
    const db = database.getDb();

    
  }
}

module.exports = thread;