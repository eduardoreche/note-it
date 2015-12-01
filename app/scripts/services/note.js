'use strict';

/**
 * @ngdoc service
 * @name noteItApp.note
 * @description
 * # note
 * Factory in the noteItApp.
 */
angular.module('noteItApp')
  .factory('Note', ['FIREBASE_URL', 'Firebase', '$firebaseArray', function (FIREBASE_URL, Firebase, $firebaseArray) {

    var ref = new Firebase(FIREBASE_URL + '/notes');
    var notes = $firebaseArray(ref);

    // Public API here
    return {
      all: function () {
        return notes;
      }
      
    };

  }]);
