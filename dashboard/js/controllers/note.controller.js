angular.module('dashboardApp') //Module's name.
  .controller('noteCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.yt = {
      video: '24UqhahIIUo',
      player: null,
      addNote: function () {
        $scope.times.push(this.player.getCurrentTime());
      },
      vars: {
        controls: 0
      }
    };

  }]);