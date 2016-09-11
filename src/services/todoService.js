'use strict';

angular.module('todoApp')
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
