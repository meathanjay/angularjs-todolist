'use strict';

angular.module('todoApp')
    .directive('todos', function() {
    	return {
    		templateUrl: './src/templates/todos.html',
    		controller: 'mainCtrl',
    		replace: true
    	}
    });
