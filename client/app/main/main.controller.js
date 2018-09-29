'use strict';

(function() {

  /**
   * Commented out code is not needed anymore, but may be useful as reference in later stages.
   */

class MainController {

  constructor($http, socket, Auth) {
    this.$http = $http;
    this.socket = socket;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isStudent = Auth.isStudent;
    this.isTeacher = Auth.isTeacher;
    this.getCurrentUser = Auth.getCurrentUser;

    // this.awesomeThings = [];

    /*
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
    */
  }

    /*
  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('thing', this.awesomeThings);
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
  */
}

angular.module('brainz21App')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController,
    controllerAs: 'mainCtrl'
  });

})();
