//1
function receivesAFunction(callback) {
    return callback();
}
//receivesAFunction(function () {return "spy";});

//2
function returnsANamedFunction() { 
    return function helloWork() {

    };
}
//returnsANamedFunction();

//3
function returnsAnAnonymousFunction() {
    return function () {

    };
}
