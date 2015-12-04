'use strict';

/**
 * @ngdoc service
 * @name noteItApp.auth
 * @description
 * # auth
 * Factory in the noteItApp.
 */
angular.module('noteItApp')
  .factory('Auth', ['$firebaseAuth', 'Firebase', 'FIREBASE_URL', function ($firebaseAuth, Firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    return {
      auth: auth,
      userRef: ref
    }
    
  }]);
