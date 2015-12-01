'use strict';

/**
 * @ngdoc function
 * @name noteItApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the noteItApp
 */
angular.module('noteItApp')
  .controller('NotesCtrl', ['$scope', 'Note', function ($scope, Note){
    $scope.notes = Note.all();
    $scope.note = {
      color: '#ffffff',
      size: 1
    };
    $scope.colors = ['#ffffff', '#f44336', '#2196f3', '#4caf50', '#ffeb3b',
                     '#795548', '#9e9e9e', '#e91e63', '#ff9800', '#cddc39',
                     '#00bcd4', '#9c27b0'];

    $scope.save = function() {
      $scope.notes.$add($scope.note).then(
        function(id) {
          console.log(id);
        }, function(err) {
          console.log(err);
        }
      );
    }

    $scope.addColor = function(color) {
      $scope.note.color = color;
    }

    $scope.addSize = function(size) {
      $scope.note.size = size;
    }

  }]);
