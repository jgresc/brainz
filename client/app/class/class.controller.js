'use strict';
(function(){

class ClassComponent {
  constructor($scope, $http, ClassService, User, Auth, ExerciseService) {
    this.$scope = $scope;
    this.$http = $http;
    this.classService = ClassService;
    this.exerciseService = ExerciseService;
    this.userService = User;
    this.getCurrentUser = Auth.getCurrentUser;
    $scope.classes = [];
    $scope.solvedExercises = [];
    $scope.successStudents = [];
    this.onInit($scope);
  }

  onInit($scope) {
    this.exerciseService.query(exercises => {
      $scope.exercises = exercises;
      for (let i = 0; i < $scope.exercises.length; i++) {
        $scope.solvedExercises.push($scope.exercises[i]);
        $scope.exercises[i].successStudents = [];
      }
        for (let j = 0; j < $scope.exercises[j].students.length; j++) {
          this.userService.get({id: $scope.exercises[j].students[j]}, student => {
            $scope.successStudents.push(student);
          });
        }

    });
    this.classService.query(classes => {
      $scope.classes = classes;
      for (let i = 0; i < $scope.classes.length; i++) {
        $scope.classes[i].studentList = [];
        for (let j = 0; j < $scope.classes[i].students.length; j++) {
          this.userService.get({id: $scope.classes[i].students[j]}, student => {
            $scope.classes[i].studentList.push(student);
          });
        }
      }
    });
  }
}

angular.module('brainz21App')
  .component('class', {
    templateUrl: 'app/class/class.html',
    controller: ClassComponent,
    controllerAs: 'classCtrl'
  });

})();
