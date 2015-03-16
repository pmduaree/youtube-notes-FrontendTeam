angular.module('dashboardApp') //Module's name.
  .controller('noteCtrl', ['$scope', '$http', function ($scope, $http) {
    
    $scope.yt = { //Test parameters.
      video: 'https://www.youtube.com/watch?v=jAy6NJ_D5vU',
      player: null,
      addNote: function () {
        $scope.times.push(this.player.getCurrentTime());
      },
      vars: {
        controls: 0
      }
    };

  }]);