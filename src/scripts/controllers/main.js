'use strict';
app.controller('MainCtrl', ['$scope', 'calculate', function($scope, calculate) {

  $scope.matrix = [[{"val":0},{"val":1}],[{"val":3},{"val":4}]];

  $scope.determinant = calculate.determinant($scope.matrix);

  $scope.update = function() {

    var temp = $scope.matrix;

    $scope.determinant = calculate.determinant(temp);

  }

}]);
