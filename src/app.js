angular.module('todoApp', [])
  .controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
      console.log('Hello World from Controller!');
    };
  });
