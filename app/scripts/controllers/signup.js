'use strict';

/**
 * @ngdoc function
 * @name noteItApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the noteItApp
 */
angular.module('noteItApp')
  .controller('SignupCtrl', ['$scope', '$state', 'Auth', function ($scope, $state, Auth) {
    $scope.user = {
      email: '',
      password: ''
    };

    $scope.error = '';

    $scope.createUser = function() {
      Auth.userRef.createUser({
        email: $scope.user.email,
        password: $scope.user.password
      }, function(error, userData) {
        if(error) {
          $scope.error = error;
        } else {
          $state.go('login');
        }
      })
    }

    $scope.login = function() {
      $state.go('login');
    }
  }]);
