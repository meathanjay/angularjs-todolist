angular.module('todoApp', [])
  .controller('mainCtrl', function($scope) {
    $scope.todos = [
      { "name": "Clean Housing" },
      { "name": "Water the Flowers" },
      { "name": "Feed the Dog" },
      { "name": "Pay diim bills" },
      { "name": "Run" },
      { "name": "Swim" }
    ]
  });
