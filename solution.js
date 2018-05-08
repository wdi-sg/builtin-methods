const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = null;

function each(array, action) {
    let i = 0,
        j = array.length;
    while (i < j) {
        action(array[i]);
        i++;
    };
};

function logger(x) {console.log(x)};

function reduce(array, reducer, accumulator) {
    let result = accumulator || array[0];

    function proxy(elem) {
        result = reducer(result, elem);
    };

    accumulator ? each(array, proxy) : each(array.slice(1), proxy);

    return result;
};

rl.question('Gimme something: ', (ans) => {
    let result = JSON.parse(ans);
    each(result, logger);
    console.log('Result of reducer: ', reduce(result, (x,y)=>{return x*y}));
    rl.close();
});