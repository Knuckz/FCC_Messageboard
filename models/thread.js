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
    this.bumped_on = this.created_on;
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
        response = await db.collection('threads')
        .findOneAndUpdate(
        { _id: mongodb.ObjectId(idToUpdate) }, 
        { 
          $set: { bumped_on: new Date() },
          $push: {
            replies: {
              _id: reply._id,
              text: reply.text,
              delete_password: reply.delete_password,
            }
          }
        });
      }
    } catch(error) {
      throw error;
    }
    
    return response;
  }
  
  static async getThreads(boardName) {
    const db = database.getDb();
    let result;
    
    try {
      result = await db.collection('threads').find({board: boardName}).toArray();
    } catch(error) {
      throw error;
    }
    
    return result;
  }
  
  static async deleteThread(idToDelete) {
    const db = database.getDb();
    let result
    
    try {
      result = await db.collection('threads').findOneAndDelete({_id: mongodb.ObjectId(idToDelete) });
    } catch(error) {
      throw error; 
    }
    return result.value;
  }
  
  static async reportThread() {
    const db = database.getDb();
    let result;
    
    try {
      
    } catch(error) {
      
    }
    
    return result;
  }
}

module.exports = Thread;