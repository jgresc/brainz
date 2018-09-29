'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var classCtrlStub = {
  index: 'classCtrl.index',
  show: 'classCtrl.show',
  create: 'classCtrl.create',
  update: 'classCtrl.update',
  destroy: 'classCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var classIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './class.controller': classCtrlStub
});

describe('Class API Router:', function() {

  it('should return an express router instance', function() {
    classIndex.should.equal(routerStub);
  });

  describe('GET /api/classs', function() {

    it('should route to class.controller.index', function() {
      routerStub.get
        .withArgs('/', 'classCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/classs/:id', function() {

    it('should route to class.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'classCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/classs', function() {

    it('should route to class.controller.create', function() {
      routerStub.post
        .withArgs('/', 'classCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/classs/:id', function() {

    it('should route to class.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'classCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/classs/:id', function() {

    it('should route to class.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'classCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/classs/:id', function() {

    it('should route to class.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'classCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
