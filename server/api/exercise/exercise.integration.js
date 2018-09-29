'use strict';

var app = require('../..');
import request from 'supertest';

var newExercise;

describe('Exercise API:', function() {

  describe('GET /api/exercises', function() {
    var exercises;

    beforeEach(function(done) {
      request(app)
        .get('/api/exercises')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          exercises = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      exercises.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/exercises', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/exercises')
        .send({
          name: 'New Exercise',
          info: 'This is the brand new exercise!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newExercise = res.body;
          done();
        });
    });

    it('should respond with the newly created exercise', function() {
      newExercise.name.should.equal('New Exercise');
      newExercise.info.should.equal('This is the brand new exercise!!!');
    });

  });

  describe('GET /api/exercises/:id', function() {
    var exercise;

    beforeEach(function(done) {
      request(app)
        .get('/api/exercises/' + newExercise._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          exercise = res.body;
          done();
        });
    });

    afterEach(function() {
      exercise = {};
    });

    it('should respond with the requested exercise', function() {
      exercise.name.should.equal('New Exercise');
      exercise.info.should.equal('This is the brand new exercise!!!');
    });

  });

  describe('PUT /api/exercises/:id', function() {
    var updatedExercise;

    beforeEach(function(done) {
      request(app)
        .put('/api/exercises/' + newExercise._id)
        .send({
          name: 'Updated Exercise',
          info: 'This is the updated exercise!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedExercise = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedExercise = {};
    });

    it('should respond with the updated exercise', function() {
      updatedExercise.name.should.equal('Updated Exercise');
      updatedExercise.info.should.equal('This is the updated exercise!!!');
    });

  });

  describe('DELETE /api/exercises/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/exercises/' + newExercise._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when exercise does not exist', function(done) {
      request(app)
        .delete('/api/exercises/' + newExercise._id)
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
