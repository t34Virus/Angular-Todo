angular
  .module('TodoApp')

  //dependency injection---v--------------------v
  .service('TodoService', ['$http', function($http){

    this.list = function () {
      return $http.get('/api'); //this returns promise
    };
  }]);