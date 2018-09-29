'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.isTeacher = Auth.isTeacher;
    this.isStudent = Auth.isStudent;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('brainz21App')
  .controller('NavbarController', NavbarController);
