'use strict';

(function(){

class InfoboardComponent {

  constructor(Auth, HomeworkService) {
    this.getCurrentUser = Auth.getCurrentUser;
    this.homeworkService = HomeworkService;
    this.onInit();
  }

  onInit() {
    this.homeworkService.query(homeworkList => {
      this.homeworkList = homeworkList;
    });
  }
}

angular.module('brainz21App')
  .component('infoboard', {
    templateUrl: 'app/infoboard/infoboard.html',
    controller: InfoboardComponent,
    controllerAs: 'infoboard'
  });

})();
