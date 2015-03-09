angular
  //dependencies-------v
  .module('TodoApp', [])

  //dependency injection---v----------------------v
  .controller('TodoController', ['$scope', function($scope){
    
    // $scope.name = "IS HOOKED UP" NOW WE KNOW CONTROLLER IS HOOKED UP;
    $scope.todos = [
      {
        title: "Fake title",
        completed: false
      }
    ];

  }]);
