//normal function:-----

// function twosum(a,b){
//     const sum=a+b;
//     console.log("result", sum);
// }
// let a=10;
// let b=50;
// const res=twosum(a,b);

// let c=56;
// let d=67;
// const re=twosum(c,d);



//function without using function name:---

// const sq=function(num){
//     return num*num;
// }
// console.log(sq(4))




// arrow function:-----

// let hello = (a,b)=>{
//     return a + b;
// }
// console.log(hello(5,7));




// function fun1(a) {
// 	function fun2(b) {
// 		return a + b;
// 	}
// 	return fun2;
// }
// function Fun() {
// 	console.log(fun1("hello ")
// 		("Abhay"));
        
// }
// Fun()


function addsq(a, b) {
    function sq(x) {
        return x * x;
    }
    return sq(a) + sq(b);
}

const a = addsq(2, 3);
const b = addsq(6, 8);

console.log(a); 
console.log(b); 
