'use strict';

/**
 * @ngdoc function
 * @name noteItApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the noteItApp
 */
angular.module('noteItApp')
  .controller('ProfileCtrl', ['$scope', '$state', 'Auth', 'user', function ($scope, $state, Auth, user) {
    $scope.user = user;

    $scope.message = '';
    $scope.problem = '';
    $scope.currentPassword = '';
    $scope.password = '';
    $scope.confirm = '';

    $scope.passwordToDelete = '';

    $scope.changePassword = function() {
      if(passwordIsValid()) {
        Auth.userRef.changePassword({
          email: $scope.user.password.email,
          oldPassword: $scope.currentPassword,
          newPassword: $scope.password
        }, function(error) {
          if(error) {
            $scope.problem = error.message;
            $scope.success = '';
          } else {
            $scope.problem = '';
            $scope.success = 'Password changed with success!';
          }
        })

        $scope.currentPassword = '';
        $scope.password = '';
        $scope.confirm = '';

      } else {
        $scope.problem = 'Invalid password';
      }
    }

    $scope.removeProfile = function() {
      Auth.userRef.removeUser({
        email: $scope.user.password.email,
        password: $scope.passwordToDelete
      }, function(error) {
        if(error) {
          $scope.problem = error.message;
        } else {
          $state.go('home');
        }
      });
      $scope.passwordToDelete = '';
    }

    $scope.logout = function() {
      Auth.userRef.unauth();
      $state.go('login');
    }

    var passwordIsValid = function() {
      return $scope.password.length > 5 && ($scope.password === $scope.confirm);
    }

  }]);
