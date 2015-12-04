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
    $urlRouterProvider.otherwise("/login");

    $stateProvider
      .state('home', {
        url: "/home",
        views: {
          "@": {
            templateUrl: "views/main.html",
            controller: 'NotesCtrl'
          },
          "userOptions": {
            templateUrl: 'views/userOptions.html',
            controller: 'NotesCtrl'
          }
        },
        resolve: {
          "user": ['$state', 'Auth', function($state, Auth){
            return Auth.auth.$requireAuth()
              .then(function(auth){
                  return auth;
              }).catch(function(){
                  $state.go('login');
              });
          }]
        }
      })

      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })

      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })

  }])

  .constant('FIREBASE_URL', 'https://note-it.firebaseio.com');
