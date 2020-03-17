const mongodb = require('mongodb');
const database = require('../util/database');


class reply {
  constructor(thread_id, text, delete_password) {
    this.thread_id = thread_id;
    this.text      = text;
    this.delete_password = delete_password;
  }
  
  async save() {
    const db = database.getDb();
    
    
  }
}

module.exports = reply;