const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = null;

function each(array, action) {
    var i = 0,
        j = array.length;
    while (i < j) {
        action(array[i]);
        i++;
    };
};

function logger(x) {console.log(x)};

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

// console.log(reduce(a, (x,y)=>{return x+y}, 0));

rl.question('Gimme something: ', (ans) => {
    let result = JSON.parse(ans);
    each(result, logger);
    console.log(reduce(result, (x,y)=>{return x+y}, 0));
    rl.close();
});