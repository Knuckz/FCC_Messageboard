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
module.exports = function (app) {
  
  app.route('/api/threads/:board')
  .get((req, res) => {
    
  })
  .post((req, res) => {
    let newThread = new Thread(
      req.params.board,
      req.body.text,
      req.body.delete_password
    )
    console.log(newThread);
    newThread.save()
    .then(res => {
      if (res.ops[0] > 0) {
        return res.json({
          message: 'Thread saved success'
        });
      }
      return res.json({
        message: 'Thread not saved'
      });
    })
    .catch(error => {
      throw error;
    })
  })
  .put((req, res) => {
    
  })
  .delete((req, res) => {
    
  })
    
  app.route('/api/replies/:board');

};
