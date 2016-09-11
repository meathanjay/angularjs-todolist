angular.module('todoApp', [])
  .controller('mainCtrl', function($scope, todoService) {

    $scope.addTodo = function() {
      var todo = {"name" : "Added a new todo!"}
      $scope.todos.push(todo);
    };

    todoService.getTodos(function(res) {
      $scope.todos = res.data;
    });

    $scope.deleteTodo = function(todo, index) {
      todoService.deleteTodo(todo);
      $scope.todos.splice(index,1);
    }

    $scope.saveTodo = function(todo) {
      todoService.saveTodo(todo);
    }

  })
  .service('todoService', function($http) {

    this.helloConsole = function() {
      console.log("This is hello from Service!");
    };

    this.getTodos = function(callback){
      $http.get('/api/mock/todos.json').then(callback)
    };

    this.deleteTodo = function(todo) {
      console.log('The ' + todo.name + " was successfully deleted!");
      // send a delete request to server to actually delete the todo
    };

    this.saveTodo = function(todo) {
      console.log(todo.name + " is updated!");
      // send a put request to server to actually save the todo
    };

  });
