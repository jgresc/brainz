'use strict';
(function () {

  class ExerciseComponent {
    constructor($scope, $state, $stateParams, Auth, User, ExerciseService) {
      this.$scope = $scope;
      this.$state = $state;
      this.exerciseId = $stateParams.exerciseId;
      this.currentUser = Auth.getCurrentUser();
      this.userService = User;
      this.exerciseService = ExerciseService;
      this.studentSolution = '';
      this.$scope.feedbackVisible = false;
      this.$scope.feedbackMessage = '';
      this.$scope.isCorrect = false;
      this.exerciseService.get({id: this.exerciseId}, exercise => {
        this.$scope.exercise = exercise;
      });
    }

    finishVideo() {
      this.update();
    }

    checkWork() {
      if (this.studentSolution === this.$scope.exercise.solution) { // Correct answer
        this.$scope.feedbackMessage = 'Korrekt - sehr gut! + ' + this.$scope.exercise.points + ' Punkte';
        this.$scope.isCorrect = true; // can be used for ng-class
        this.$scope.feedbackVisible = true;
        let that = this;
        setTimeout(function() {
          that.update();
        }, 2000);

      } else { // False answer
        this.$scope.feedbackMessage = this.$scope.exercise.hint;
        this.$scope.isCorrect = false; // can be used for ng-class
        this.$scope.feedbackVisible = true;
      }
    }

    update() {
      if (this.$scope.exercise.solved === false) { // Not yet solved
        this.$scope.exercise.solved = true;
        this.exerciseService.update(this.$scope.exercise);
        this.currentUser.totalPoints += this.$scope.exercise.points;
        this.currentUser.solvedExercises++;
        this.userService.update(this.currentUser);
        // Refresh the page
        this.$state.go(this.$state.current, {}, {reload: true});
      }
    }

    closeFeedback() {
      this.$scope.feedbackVisible = false;
    }

  }

  angular.module('brainz21App')
    .component('exercise', {
      templateUrl: 'app/exercise/exercise.html',
      controller: ExerciseComponent,
      controllerAs: 'exerciseCtrl'
    });

})();
