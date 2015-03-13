angular.module('dashboardApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.view.html',
        controller: 'dashboard.contoller.js'
      })
      .when('/note', {
        templateUrl: 'views/note.view.html',
        controller: 'note.controller.js'
      })
      .otherwise('/');
  }]).run(function ($rootScope, $window) {
      $rootScope.$on('$routeChangeSuccess', function () {
        console.log("$routeChangeSuccess!");
        $window.scrollTo(0, 0);
      });
  });