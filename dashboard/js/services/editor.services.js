angular.module('dashboardApp') //this service is for the EDITOR VIEW.
  .factory('editorService', function ($http) {
    var root = ""; //Database
    var testMessages = [
      {"editMode":false, "startTime":"0:20", "endTime": "0:33", "content":"Yay! text! and some more!Yay! text! and some more!Yay! text! and some more!Yay! text! and some more!Yay! text! and some more!Yay! text! and some more!Yay! text! and some more!Yay! text! and some more!"},
      {"editMode":false, "startTime":"3:00", "endTime": "3:40", "content":"This is more text! and some more!"},
      {"editMode":false, "startTime":"0:10", "endTime": "0:40", "content":"Oh shit! some more!"},
      {"editMode":false, "startTime":"0:00", "endTime": "0:20", "content":"Awesome! More more text and some more!"}
    ];
  
    return{
      getAll: function(){ //Get all notes that the user has created. (for this video)
        return testMessages;
      },
      get: function(id){ //Get a specific note from the bloc 
      
      },
      add: function(content){ //Add a new note to the bloc, content incluides startTime, endTime & note content.
        testMessages.push(content);
      },
      remove: function(id){
        
      }
    };

  });