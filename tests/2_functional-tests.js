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
let globalId;

suite('Functional Tests', function() {

  suite('API ROUTING FOR /api/threads/:board', function() {
    
    test('Post threads returns correct status and body', function(done) {
      chai.request(server)
      .post('/api/threads/main') //board = main
      .send({
        text: 'Test text',
        delete_password: 'what?'
      })
      .end(function(error, result) {
        globalId = result.body._id;
        console.log('globalId: ', globalId);
        assert.equal(result.status, 200, 'status should be 200');
        assert.equal(result.body.text, 'Test text', 'Should equal Test text');
        assert.equal(result.body.message, 'Success', 'Should equal success');
        done();
      })
    });
    
    test('GET Threads', function(error, result) {
      chai.request(server)
      .get('/api/threads/main')
      .send({})
      .end(function(error, result) {
        console.log(result.body);
      })
    });
    
//     suite('DELETE', function() {
      
//     });
    
//     suite('PUT', function() {
      
//     });
    

  });
  
  suite('API ROUTING FOR /api/replies/:board', function() {
    
    suite('POST', function() {
      test('Test return values of reply post', function(done) {
        chai.request(server)
        .post('/api/replies/main')
        .send({
          thread_id: globalId,
          text: 'Some reply',
          delete_password: 'delete_me'
        })
        .end(function(error, result) {
          assert.equal(result.status, 200, 'status code is 200');
          assert.equal(result.body.text, 'Some reply', 'text comes back okay');
          assert.equal(result.body.message, 'Success', 'Success message comes back');
          assert.isNotNull(result.body.bumped_on, 'bumped on is not null');
          done();
        })
      })
    });
    
//     suite('GET', function() {
      
//     });
    
//     suite('PUT', function() {
      
//     });
    
//     suite('DELETE', function() {
      
//     });
    
   });

});
