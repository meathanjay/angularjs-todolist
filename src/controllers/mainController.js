'use strict';

angular.module('todoApp')
	.controller('mainCtrl', function($scope, todoService) {

    $scope.addTodo = function() {
      var todo = {"name" : "Added a new todo!"}
      $scope.todos.unshift(todo);
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

   });
