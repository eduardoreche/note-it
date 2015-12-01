'use strict';

/**
 * @ngdoc overview
 * @name noteItApp
 * @description
 * # noteItApp
 *
 * Main module of the application.
 */
angular
  .module('noteItApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'firebase'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "views/main.html",
        controller: 'NotesCtrl'
      });

  }])

  .constant('FIREBASE_URL', 'https://note-it.firebaseio.com');
