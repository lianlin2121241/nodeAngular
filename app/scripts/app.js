'use strict';

/**
 * @ngdoc overview
 * @name nodeAngularApp
 * @description
 * # nodeAngularApp
 *
 * Main module of the application.
 */
angular
  .module('nodeAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('ngtodos')
      .setStorageType('localStorage');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/todos', {
        templateUrl: 'views/todos.html',
        controller: 'TodosCtrl',
        controllerAs: 'todos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
