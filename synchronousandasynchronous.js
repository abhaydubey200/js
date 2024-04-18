//this is synchronous function,this will exquit one by one:----

// function synchronousFunction() {
//     console.log('Synchronous function is executing...');
// }

// console.log('Before calling synchronous function');
// synchronousFunction();
// console.log('After calling synchronous function');



//this is synchronous function,this will exiqute after complting ove time:----

// setTimeout(function(){
//     const name=prompt("your name");
//     console.log(name);
// }, 3000)



setTimeout(function(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      readline.question('What is your name?', name => {
        console.log("hello",name);
        
        readline.close();
      });
}, 30000)