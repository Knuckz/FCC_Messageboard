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
    newThread.save()
    .then(ret => {
      if (ret.result.n > 0) {
        res.json({
          ...ret.ops[0]
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
    
  })

};
