/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
const Thread = require('../models/thread');
const Reply = require('../models/reply');

module.exports = function (app) {
  
  app.route('/api/threads/:board')
  .get((req, res) => {
    Thread.getThreads(req.query.board)
    .then(ret => {
      console.log(ret);
        res.json({
          ret
        })
      
    })
    .catch(error => {
      
    })
  })
  .post((req, res) => {
    let newThread = new Thread(
      req.params.board,
      req.body.text,
      req.body.delete_password
    )
    newThread.save()
    .then(ret => {
      if (ret.result.n > 0) {
        res.json({
          ...ret.ops[0],
          message: 'Success'
        })
      }
    })
    .catch(error => {
      throw error;
    })
  })
  .put((req, res) => {
    
  })
  .delete((req, res) => {
    
  })
    
  app.route('/api/replies/:board')
  .get((req, res) => {
    
  })
  .post((req, res) => {
    let response = {};
    let newReply = new Reply(
      req.body.thread_id,
      req.body.text,
      req.body.delete_password
    );
    
    newReply.save()
    .then(ret => {
      if (ret.result.n > 0) {
        return res.json({
          ...ret.ops[0],
          message: 'Success'
        });
      }
      return res.json({
        message: 'No reply saved'
      })
    })
    .catch(error => {
      res.json({
        message: 'Error saving reply'
      })
      throw error;
    })
  })

};
