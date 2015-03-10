angular
  //dependencies-------v
  .module('TodoApp', [])

  //dependency injection---v----------------------v
  .controller('TodoController', ['$scope', 'TodoService', function($scope, TodoService){
    
    // $scope.name = "IS HOOKED UP" NOW WE KNOW CONTROLLER IS HOOKED UP;
    //   {
    //     title: "Fake title",
    //     completed: true

    //TodoService.list() returns a promise
    TodoService.list().then(function (todos){
      $scope.todos = todos.data;
    }); 

    $scope.save_todo = function (new_title) {
      $scope.todos.push({
        title: new_title,
        completed: false
      });
    
      $scope.new_todo = ""; //clear the input
    };
    
    $scope.enter_saves = function($event){
      if( $event.keyCode == 13){ //keyCode for [enter key]
        $scope.save_todo( $scope.new_todo);
      }
    };

  }]);
