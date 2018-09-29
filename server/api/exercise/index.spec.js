'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var exerciseCtrlStub = {
  index: 'exerciseCtrl.index',
  show: 'exerciseCtrl.show',
  create: 'exerciseCtrl.create',
  update: 'exerciseCtrl.update',
  destroy: 'exerciseCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var exerciseIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './exercise.controller': exerciseCtrlStub
});

describe('Exercise API Router:', function() {

  it('should return an express router instance', function() {
    exerciseIndex.should.equal(routerStub);
  });

  describe('GET /api/exercises', function() {

    it('should route to exercise.controller.index', function() {
      routerStub.get
        .withArgs('/', 'exerciseCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/exercises/:id', function() {

    it('should route to exercise.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'exerciseCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/exercises', function() {

    it('should route to exercise.controller.create', function() {
      routerStub.post
        .withArgs('/', 'exerciseCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/exercises/:id', function() {

    it('should route to exercise.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'exerciseCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/exercises/:id', function() {

    it('should route to exercise.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'exerciseCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/exercises/:id', function() {

    it('should route to exercise.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'exerciseCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
