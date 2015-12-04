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

    $scope.login = function() {
      $scope.error = {};

      Auth.auth.$authWithPassword($scope.user).then(
        function(auth) {
            $state.go('home');
        }, function(error) {
          $scope.error = 'User not found.'
          $scope.user.password = '';
        }
      )
    }

    $scope.signup = function() {
      $state.go('signup');
    }


  }]);
