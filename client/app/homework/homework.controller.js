'use strict';
(function () {

  class HomeworkComponent {
    constructor($scope, $stateParams, HomeworkService, ExerciseService) {
      this.$scope = $scope;
      $scope.isHomeworkSelected = false;
      $scope.exerciseList = [];
      let homeworkId = $stateParams.homeworkId;
      if (homeworkId !== '') {
        $scope.isHomeworkSelected = true;
        HomeworkService.get({id: homeworkId}, homework => {
          $scope.homework = homework;
          if (homework.exercises) {
            for (let exerciseId in homework.exercises) {
                ExerciseService.get({id: homework.exercises[exerciseId]}, exercise => {
                  $scope.exerciseList.push(exercise);
                });
            }
          }
        });
      }
    }

    isSolved(exercise) {
      if (exercise.solved) {
        return exercise.points;
      } else {
        return 0;
      }
    }
  }

  angular.module('brainz21App')
    .component('homework', {
      templateUrl: 'app/homework/homework.html',
      controller: HomeworkComponent,
      controllerAs: 'homeworkCtrl'
    });

})();
