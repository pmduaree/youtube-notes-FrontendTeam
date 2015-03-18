angular.module('dashboardApp') //Module's name.
  .controller('editorCtrl', ['$scope', '$http', 'editorService', function ($scope, $http, editorService) {

    $scope.testMessages = [];
    $scope.note = {}; //this is for the child part of the ng-model. Just create an empty object for it no handle

    $scope.yt = { //Test parameters.
      video: 'https://www.youtube.com/watch?v=DfrwK-ravko',
      player: null,
      vars: {
        controls: 2,
        autohide: 1,
        disablekb: 1
      }
    };

    $scope.editItem = function (item) {
      item.editMode = !item.editMode;
    };
    
    $scope.updateNotes = function () {
      $scope.testMessages = editorService.getAll();
    };
    
    $scope.checkTime = function(event)
    {
        this.getStartTime();
        this.getEndTime(event);

    };

    $scope.getStartTime = function(){

        if($scope.note.content == null || $scope.note.content == '') {
            $scope.startTime = transformToReadableTimestamp($scope.yt.player.getCurrentTime());
        }
    };

    $scope.getEndTime = function(event){

        if(event.keyCode == 13 && $scope.isCtrlPressed) { //13 is the ascii of enter && 17 is control
            $scope.saveNote();
        }//enter
        if(event.keyCode == 17)//17 is for the key control
            $scope.isCtrlPressed = true;
        else
            $scope.isCtrlPressed = false;


    };
    $scope.saveNote = function(){
        //validate if its a note
        if($scope.note.content == null || $scope.note.content == '')
            return;
        block = {
            "startTime": $scope.startTime,
            "content": $scope.note.content,
            "endTime": transformToReadableTimestamp($scope.yt.player.getCurrentTime()),
            "editMode":false
        };
        //save the note in memory
        editorService.add(block);

        //call a function to save in the DB


        //clean the text
        $scope.note.content = null;
    };

    function transformToReadableTimestamp(seconds) {
        var min = Math.floor(seconds / 60);
        var sec = Math.floor((seconds - min * 60));
        if (sec < 10)
            sec = "0" + sec;
        return min + ":" + sec;
    }

    }]);