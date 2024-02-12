function name(name , callback){
    console.log('hi'+''+ name);
    callback();
}
function callme(){
    console.log('hi this is callback function');
}
name ('abhay', callme);