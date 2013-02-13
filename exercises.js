module.exports = {
  hello_world: function () {
    console.log("Hello you!");
  },

  show_num: function (num) {
    console.log(num);
  },

  dedup: function (array) {
    var uniqArr = [];

    array.forEach( function (element) {
      if (uniqArr.indexOf(element) == -1) {
        uniqArr.push(element);
      };
    });

    console.log(uniqArr);
  },

  two_sum: function(array) {
    for ( var i = 0; i < array.length; i++) {
      for ( var j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === 0) {
          console.log("Found a pair!");
          return true;
        };
      };
    };
  },

  transpose: function(grid) {
    var newGrid = [];

    for (var m = 0; m < grid.length; m++) {
      newGrid.push([]);
    };

    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid.length; j++) {
        newGrid[j][i] = grid[i][j];
      };
    };

    console.log(newGrid);
  },

  doubler: function(array) {
    var newArr = [];
    array.map( function(num) { newArr.push(num * 2) } );

    console.log(newArr);
  },

  myEach: function(array, f) {
    array.map( function(num) { f(num); });
  },

  inject: function(array, start, f) {
    var result = start;

    array.map( function(num) {
      holder = f(result, num);
      result = holder;
    });
    console.log(result);
  },

  bubbleSort: function(array) {
    var sorted = false;

    while (sorted == false) {
      sorted = true;
      for (var i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;

          sorted = false;
        };
      };
    };
    console.log(array);
  },

  substrings: function(string) {
    var substrings = [];

    for (var i = 0; i < string.length; i++) {
      for (var j = i + 1; j <= string.length; j++) {
        substrings.push(string.substring(i, j));
      };

    };

    console.log(substrings);
  },

  recSumArray: function(array) {
    if (array.length == 0) {
      return 0;
    } else if (array.length == 1) {
      return array[0];
    } else {
      return (array.pop()+ this.recSumArray(array));
    };
  },

  exp1: function(b, n) {
    if (n == 0) {
      return 1;
    } else {
      return ( b * this.exp1(b, n - 1));
    };
  },

  fibRec: function(n) {
    if (n == 1) {
      return [0];
    } else if (n == 2) {
      return [0,1];
    } else {
      var oneLess = this.fibRec(n-1);
      oneLess.push(oneLess[oneLess.length-1] + oneLess[oneLess.length-2]);
      return oneLess;
    };
  }


};

