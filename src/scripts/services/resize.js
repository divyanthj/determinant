app.factory('resize', function() {

  var rowLength = $scope.matrix[0].length;
  var colLength = $scope.matrix.length;


  var addRow = function() {

    this.rowLength = $scope.matrix[0].length;

    this.colLength = $scope.matrix.length;

    var array = [];

    for(var i=0;i<this.rowLength;i++) {

      array.push({"val":0});

    }

    $scope.matrix.push(array);

  };

  var addCol = function() {

    this.rowLength = $scope.matrix[0].length;

    this.colLength = $scope.matrix.length;

    for(var i=0;i<this.colLength;i++) {

      $scope.matrix[i].push({"val":0});

    }

  };

  var removeRow = function() {

    this.rowLength =   $scope.matrix[0].length;

    this.colLength = $scope.matrix.length;

    $scope.matrix.splice(this.colLength-1,1);

  };

  var removeCol = function() {

    this.rowLength =   $scope.matrix[0].length;

    this.colLength = $scope.matrix.length;

    for(var i=0;i<this.colLength;i++) {

      $scope.matrix[i].splice(this.rowLength-1,1);

    }
  };



});
