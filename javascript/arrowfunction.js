var b=20;
let c=40;
function add(){
    let a=10; // local variable
    var d=60;
    console.log('inside function'+a); // we are using console.log for debugging 
    console.log('inside function'+d);
    b=30;
    console.log('inside function'+b);
    c=50;
    console.log('inside function'+c);
    console.log(e); // undefined
    var e=100;

}

add();

console.log('Outside function'+b);
console.log('Outside function'+c);
console.log('Outside function'+d); // not defined
console.log('Outside function'+a); // not defined
