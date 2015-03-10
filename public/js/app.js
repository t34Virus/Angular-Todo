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

      //saves new todo
      TodoService.create({title: new_title });
    };
    
    $scope.enter_saves = function($event){
      if( $event.keyCode == 13){ //keyCode for [enter key]
        $scope.save_todo( $scope.new_todo);
      }
    };

    //on checkbox click.. ng-change was being a prick
    $scope.check_changed = function($event, todo_id) {
      if ($event.srcElement.checked) {
        TodoService.complete(todo_id); 
      } else {
        TodoService.incomplete(todo_id);
      }
    };

    $scope.incomplete = function (todo_id) {
      return $http.put('/api/'+todo_id+'/incomplete');
    };

    $scope.delete = function ( todo ) {
      $scope.todos.splice( $scope.todos.indexOf(todo), 1);
      TodoService.delete(todo._id);
    };

  }]);
