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
  }

};

