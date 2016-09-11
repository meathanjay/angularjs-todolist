angular.module('todoApp')
	.directive('helloWorld', function() {
		return {
			template: '<h1>Hello World</h1>',
			//restrict: "A"
		};
	});
