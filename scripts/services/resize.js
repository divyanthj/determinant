app.factory('resize', [function(calculate) {

  return {

    increase : function(matrix) {

        var initSize = matrix.length;

        angular.forEach(matrix, function(row, index) {

          row.push({

            val : 0

          });

        });

        var newRow = [];

        for(var i=0; i <= initSize; i++) {

          newRow.push({val:0})

        }

        matrix.push(newRow);

      },

      decrease : function(matrix) {

        matrix.pop();

        angular.forEach(matrix, function(row) {

          row.pop();

        })

      }

  };



}]);
