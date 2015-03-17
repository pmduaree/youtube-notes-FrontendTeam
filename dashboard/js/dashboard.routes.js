angular.module('dashboardApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.view.html',
        controller: 'dashboardCtrl'
      })
      .when('/note', {
        templateUrl: 'views/editor.view.html',
        controller: 'editorCtrl'
      })
      .otherwise('/');
  }]).run(function ($rootScope, $window) {
      $rootScope.$on('$routeChangeSuccess', function () {
        console.log("$routeChangeSuccess!");
        $window.scrollTo(0, 0);
      });
  });