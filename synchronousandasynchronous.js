//this is synchronous function,this will exquit one by one:----

function synchronousFunction() {
    console.log('Synchronous function is executing...');
}

console.log('Before calling synchronous function');
synchronousFunction();
console.log('After calling synchronous function');



//this is synchronous function,this will exiqute after complting ove time:----

setTimeout(function(){
    console.log("Hello")
}, 3000)