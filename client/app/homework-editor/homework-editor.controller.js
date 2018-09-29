'use strict';
(function () {

  class HomeworkEditorComponent {
    constructor($scope, $state, Auth, HomeworkService, ExerciseService) {
      this.getCurrentUser = Auth.getCurrentUser;
      this.homeworkService = HomeworkService;
      this.exerciseService = ExerciseService;
      this.$scope = $scope;
      this.$state = $state;
      this.homework = {
        title: '',
        subject: null,
        subCategory: null,
        deadline: null,
        exercises: []
      };
      this.submitted = false;
      this.generatedExerciseList = [];
      this.maxPoints = 0;

      this.onInit();

      // TODO Create enum of subjects and subcategories (or an endpoint?)
      $scope.subjects = [
        'Deutsch',
        'Englisch',
        'Französisch',
        'Mathematik'
      ];
      $scope.selectedSubject = 'Auswählen...';

      $scope.subCategories = [];
      $scope.selectedSubCategory = 'Auswählen...';
    }

    onInit() {
      this.homeworkService.query(homeworkList => {
        this.homeworkList = homeworkList;
      });
      this.exerciseService.query(exerciseList => {
        this.exerciseList = exerciseList;
      });
    }

    selectSubject(subject) {
      this.$scope.selectedSubject = subject;
      this.homework.subject = subject;

      // Change options in subcategory dropdown (how to do this more dynamically?)
      if (subject === 'Mathematik') {
        this.$scope.subCategories = [
          'Algebra',
          'Geometrie'
        ];
      } else {
        this.$scope.subCategories = [
          'Grammatik',
          'Hörverständnis',
          'Textverständnis'
        ];
      }
      this.$scope.selectedSubCategory = 'Auswählen...';
    }

    selectSubCategory(subCategory) {
      this.$scope.selectedSubCategory = subCategory;
      this.homework.subCategory = subCategory;
      this.generateExerciseList();
    }

    // Generate list of available exercises given the selected subject/subcategory
    generateExerciseList() {
      this.generatedExerciseList = [];
      if (this.exerciseList) {
        for (let exercise in this.exerciseList) {
          if (this.exerciseList[exercise].subject === this.$scope.selectedSubject && this.exerciseList[exercise].subCategory === this.$scope.selectedSubCategory) {
            this.generatedExerciseList.push(this.exerciseList[exercise]);
          }
        }
      }
    }

    // Add or remove an exercise from a homework
    addOrRemoveExercise(exercise) {
      let index = this.homework.exercises.indexOf(exercise._id);
      if (index > -1) {
        this.homework.exercises.splice(index, 1);
      } else {
        this.homework.exercises.push(exercise._id);
        this.maxPoints += exercise.points;
      }
    }

    // Create and persist the homework
    create(form) {
      this.submitted = true;
      this.homework.creator = this.getCurrentUser();
      this.homework.maxPoints = this.maxPoints;
      // TODO add class (fetch from teacher?)

      if (form.$valid) {
        this.homeworkService.save(this.homework, () => {
          // Refresh the page
          this.$state.go(this.$state.current, {}, {reload: true});
        });
      }
    }

    // Remove a homework
    remove(homework) {
      this.homeworkService.remove({id: homework._id}, () => {
        // Refresh the page
        this.$state.go(this.$state.current, {}, {reload: true});
      });
    }
  }

  angular.module('brainz21App')
    .component('homeworkEditor', {
      templateUrl: 'app/homework-editor/homework-editor.html',
      controller: HomeworkEditorComponent,
      controllerAs: 'homeworkEditor'
    });

})();
