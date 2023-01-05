function add1(x,y){
    let z=x+y;
    return z;
}
console.log('first add function'+add1(10,20));

//ES5
let add2=function(x,y){
    return x+y;
}
console.log('second add function'+add2(10,20));


// arrow function ES6 
let add3=(x,y)=>x+y;
console.log('third add function'+add3(10,20));

let names=['Antony','Renisha','Renita'];
let length=names.map(name=>name.length);
console.log(length);



