'use strict';

var app = require('../..');
import request from 'supertest';

var newClass;

describe('Class API:', function() {

  describe('GET /api/classes', function() {
    var classs;

    beforeEach(function(done) {
      request(app)
        .get('/api/classes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          classs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      classs.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/classes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/classes')
        .send({
          name: 'New Class',
          info: 'This is the brand new class!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newClass = res.body;
          done();
        });
    });

    it('should respond with the newly created class', function() {
      newClass.name.should.equal('New Class');
      newClass.info.should.equal('This is the brand new class!!!');
    });

  });

  describe('GET /api/classes/:id', function() {
    var classe;

    beforeEach(function(done) {
      request(app)
        .get('/api/classes/' + newClass._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          classe = res.body;
          done();
        });
    });

    afterEach(function() {
      classe = {};
    });

    it('should respond with the requested class', function() {
      classe.name.should.equal('New Class');
      classe.info.should.equal('This is the brand new class!!!');
    });

  });

  describe('PUT /api/classes/:id', function() {
    var updatedClass;

    beforeEach(function(done) {
      request(app)
        .put('/api/classes/' + newClass._id)
        .send({
          name: 'Updated Class',
          info: 'This is the updated class!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedClass = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedClass = {};
    });

    it('should respond with the updated class', function() {
      updatedClass.name.should.equal('Updated Class');
      updatedClass.info.should.equal('This is the updated class!!!');
    });

  });

  describe('DELETE /api/classes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/classes/' + newClass._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when class does not exist', function(done) {
      request(app)
        .delete('/api/classes' + newClass._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
