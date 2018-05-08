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
    var result = accumulator || array[0];

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
    console.log('Result of reduce function: ', reduce(result, (x,y)=>{return x*y}, 1));
    rl.close();
});