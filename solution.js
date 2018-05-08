const readline = require('readline');

function each(array, action) {
    var i = 0,
        j = array.length;
    while (i < j) {
        action(array[i]);
        i++;
    };
};

const a = [1,2,3,4,5]

function logger(x) {console.log(x)};

// each(a, logger);

function reduce(array, reducer, accumulator) {
    var result = null;
    
    if (typeof(accumulator) === 'undefined') {
        switch (typeof(array[0])) {
            case 'number':
                result = 0;
                break;
            case 'string':
                result = '';
                break;
            default:
                console.error('Invalid array input');
                return;
                break;
        }
    } else {
        result = accumulator;
    };

    function proxy(elem) {
        result = reducer(result, elem);
    };

    each(array, proxy);

    return result;
};

console.log(reduce(a, (x,y)=>{return x+y}, 0));