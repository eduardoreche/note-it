'use strict';

/**
 * @ngdoc function
 * @name noteItApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the noteItApp
 */
angular.module('noteItApp')
  .controller('LoginCtrl', ['$scope', '$state', 'Auth', function ($scope, $state, Auth) {
    $scope.user = {
      email: '',
      password: ''
    };

    $scope.error = '';
    $scope.success = '';

    $scope.login = function() {
      $scope.error = '';

      Auth.auth.$authWithPassword($scope.user).then(
        function(auth) {
            $state.go('home');
        }, function(error) {
          $scope.error = 'User not found.'
          $scope.user.password = '';
        }
      )
    }

    $scope.resetPassword = function() {
      Auth.userRef.resetPassword({
        email : $scope.user.email
      }, function(error) {
        if (error === null) {
          $scope.success = '';
          $scope.error = 'User not found.'
        } else {
          $scope.error = '';
          $scope.success = 'Password reset instructions sent to your email'
        }
      });
    }

    $scope.signup = function() {
      $state.go('signup');
    }


  }]);
