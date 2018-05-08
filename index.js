numbers = [1, 2, 3]


function each(list, action) {
      for (let i = 0; i < list.length; i++) {
            action(list[i]);
      };
};




function reduce(array, reducer, accumulator) {
      each(array, function(item) {
            accumulator = reducer(accumulator, item);
      });
      return accumulator;
}



const sum = reduce(numbers, function (total, number) {
      return total + number;
  }, 0);

  console.log(sum)