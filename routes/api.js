/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
const Thread = require('../modeles/thread');
module.exports = function (app) {
  
  app.route('/api/threads/:board')
  .get((req, res) => {
    
  })
  .post((req, res) => {
    let newThread = new Thread(
      
    )
  })
  .put((req, res) => {
    
  })
  .delete((req, res) => {
    
  })
    
  app.route('/api/replies/:board');

};
