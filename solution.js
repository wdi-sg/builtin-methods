function each(list, action) {
  for(let i = 0; i < list.length; i++) {
    action(list[i]);
  }
}

// const array = [1,2,3];
// each(array, console.log);

// without using each
function reduce(list, reducer, accumulator) {
  let output = accumulator;
  for (let i = 0; i < list.length; i++) {
    output = reducer(output, list[i]);
  }
  return output;
}

// using each and accumulator optional
function reduce(list, reducer, accumulator = null) {
  let output = accumulator;
  
  each(list, function(element) {
    if (output == null) {
      output = element;
    } else {
      output = reducer(output, element);
      
    }
  })

  return output;
}

// sum
const reducer = function(accumulator, currentValue) {
  return accumulator + currentValue;
}

// // min
// const reducer = function(accumulator, currentValue) {
//   return Math.min(accumulator, currentValue);
// }

const array = [1,2,3];
console.log(reduce(array, reducer));