'use strict';

/**
 * @ngdoc function
 * @name noteItApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the noteItApp
 */
angular.module('noteItApp')
  .controller('NotesCtrl', ['$scope', 'Note', 'Auth', 'user', function ($scope, Note, Auth, user){
    $scope.notes = Note.all(user.uid);
    $scope.note = {
      color: '#ffffff',
      size: 1
    };
    $scope.colors = ['#ffffff', '#f44336', '#2196f3', '#4caf50', '#ffeb3b',
                     '#795548', '#9e9e9e', '#e91e63', '#ff9800', '#cddc39',
                     '#00bcd4', '#9c27b0'];
    $scope.user = user.password;
    $scope.search = '';


    $scope.save = function() {
      if($scope.note.$id) {
        $scope.notes.$save($scope.note).then(
          function(id) {
            console.log(id);
          }, function(err) {
            console.log(err);
          }
        );
      } else {
        $scope.notes.$add($scope.note).then(
          function(id) {
            console.log(id);
          }, function(err) {
            console.log(err);
          }
        );
      }

      $scope.new();
    }

    $scope.new = function() {
      $scope.note = {
        color: '#ffffff',
        size: 1
      }
    }

    $scope.edit = function(note) {
      $scope.note = note;
    }

    $scope.remove = function(note) {
      if(confirm('Are you sure?')) {
        $scope.notes.$remove(note).then(
          function() {
            console.log('success delete');
          }, function(err) {
            consoel.log(err);
          }
        );
      }
    }

    $scope.addColor = function(color) {
      $scope.note.color = color;
    }

    $scope.addSize = function(size) {
      $scope.note.size = size;
    }

    $scope.markdown = function(text) {
      return marked(text);
    }

    $scope.logout = function() {
      Auth.userRef.unauth();
      $state.go('login');
    }

  }]);

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false, // if false -> allow plain old HTML ;)
    smartLists: true,
    smartypants: false
  });
