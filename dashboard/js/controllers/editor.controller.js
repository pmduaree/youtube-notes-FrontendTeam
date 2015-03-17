angular.module('dashboardApp') //Module's name.
  .controller('editorCtrl', ['$scope', '$http', 'editorService', function ($scope, $http, editorService) {

    $scope.testMessages = [];

    $scope.yt = { //Test parameters.
      video: 'https://www.youtube.com/watch?v=DfrwK-ravko',
      player: null,
      vars: {
        controls: 2,
        autohide: 1,
        disablekb: 1,
      }
    };

    $scope.editItem = function (item) {
      item.editMode = !item.editMode;
    }
    
    $scope.updateNotes = function () {
      $scope.testMessages = editorService.getAll();
    }
    
    $scope.addNote = function(){
      editorService.add({"editMode":false, "startTime":$scope.yt.player.getCurrentTime(), "endTime": "[0:20]", "content":"Awesome! More more text and some more!"});
    }

  }]);