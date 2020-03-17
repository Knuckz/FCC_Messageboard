/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  suite('API ROUTING FOR /api/threads/:board', function() {
    
    suite('POST', function() {
      chai.request(server)
      .post('/api/threads/main') //board = main
      .send({
        text: 'Test text',
        delete_password: 'what?'
      })
      .end(function(error, result) {
        console.log(result.body);
        assert.equal(result.status, 200, 'status should be 200');
        assert.equal(result.body.text, 'Test text', 'Should equal Test text');
        assert.equal(result.body.message, 'Success', 'Should equal success');
      })
    });
    
//     suite('GET', function() {
      
//     });
    
//     suite('DELETE', function() {
      
//     });
    
//     suite('PUT', function() {
      
//     });
    

  });
  
//   suite('API ROUTING FOR /api/replies/:board', function() {
    
//     suite('POST', function() {
      
//     });
    
//     suite('GET', function() {
      
//     });
    
//     suite('PUT', function() {
      
//     });
    
//     suite('DELETE', function() {
      
//     });
    
//   });

});
