'use strict';
app.controller('MainCtrl', ['$scope', 'calculate', 'resize', function($scope, calculate, resize) {

  $scope.matrix = [[{"val":0},{"val":1}],[{"val":3},{"val":4}]];

  $scope.determinantValue = calculate.determinant($scope.matrix);

  $scope.update = function() {

    var temp = $scope.matrix;

    $scope.determinantValue = calculate.determinant(temp);

  }

  $scope.increaseSize = function() {

    resize.increase($scope.matrix)

    $scope.update();

  }

  $scope.decreaseSize = function() {

    resize.decrease($scope.matrix);

    $scope.update();

  }

}]);
