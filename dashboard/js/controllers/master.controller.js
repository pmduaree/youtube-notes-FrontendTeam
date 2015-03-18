angular.module('dashboardApp')
  .controller('masterController', function ($scope) {
        $scope.video = {};
        $scope.loadVideo = function() {
            //$scope.yt.video = $scope.video.url;
            //not working. It seems that this scope is not recognizing the yt object
        }
  });