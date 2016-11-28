app.service('calculate', function() {

  this.determinant = function(A) {

      var s;

      var det = 0;

      //Exit conditions
      if (A.length == 1){

          return A[0][0].val;

      }

      if (A.length == 2) {

          det =  A[0][0].val * A[1][1].val - A[1][0].val * A [0][1].val;

          return det;

      }

      //Recursion begins here
      //Instantiate smaller matrix

      for(var i=0;i<A.length;i++) {

          var smaller = [];

          for(var newvar=0;newvar<A.length-1;newvar++) {

          var array = [];

          for(var m=0;m<A.length-1;m++){

            array.push({"val":0});

          }

          smaller.push(array);
      }

      //Populate smaller matrix with the appropriate values.
      for(var a=1;a<A.length;a++){

          for(var b=0;b<A.length;b++){

            if(b<i){

              smaller[a-1][b].val=A[a][b].val;

            }

            else if(b>i){

              smaller[a-1][b-1].val=A[a][b].val;

            }

          }

      }
      //calculate determinant of smaller matrix
      //multiply determinant of smaller matrix with current element
      //add to "det"

      if (i % 2 === 0){

          s = 1;

        } else {

          s = -1;

        }

        det += s * A[0][i].val * (determinant(smaller));

      }

      return det;

    }

});
