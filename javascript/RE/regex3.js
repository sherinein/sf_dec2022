const input='apple hello hello he';
const pattern=/hello/g;

const output1=input.search(pattern); // search find the index
console.log(output1);


const output2=input.replace(pattern,'world');
console.log(output2);