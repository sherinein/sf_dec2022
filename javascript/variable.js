
let a=10;
const d=100;
function fun(){
    if(true){
        let b=9; // local variable
        var c=10;
        console.log(b);
        console.log(c);
        console.log('constant value'+d);
        d=120;
        console.log('reassigned constant value'+d);
    }
    console.log('outside if block'+c);
    console.log(b);
}
fun();
console.log(a);

