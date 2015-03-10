angular
  .module('TodoApp')

  //dependency injection---v--------------------v
  .service('TodoService', ['$http', function($http){

    this.list = function () {
      return $http.get('/api'); //this returns promise
    };

    this.create = function ( todo ) {
      return $http.post('/api', todo); //this returns promise
    };

    this.complete = function ( todo_id ) {
      return $http.put('/api/'+todo_id+'/complete'); //this returns promise
    };

    this.incomplete = function ( todo_id ) {
      return $http.put('/api/'+todo_id+'/incomplete'); //this returns promise
    };

    this.delete = function ( todo_id ) {
      return $http.delete('/api/'+todo_id); //this returns promise
    };
  }]);