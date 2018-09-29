'use strict';

class SignupController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  userRole = {
    TEACHER: 1,
    STUDENT: 2,
    properties: {
      1: {name: "Lehrer", value: "teacher"},
      2: {name: "Schüler", value: "student"}
    }
  };
  //end-non-standard

  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }

  register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        role: this.user.role,
        password: this.user.password
      })
      .then(() => {
        // Account created, redirect to home
        return this.$state.go('main');
      })
      .catch(err => {
        err = err.data;
        this.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, (error, field) => {
          form[field].$setValidity('mongoose', false);
          this.errors[field] = error.message;
        });
      });
    }
  }
}

angular.module('brainz21App')
  .controller('SignupController', SignupController);
