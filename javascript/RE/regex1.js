const pattern='/^a...s$/'; // literal

const regex = new RegExp(/^a...s$/);  //constructor parameter


console.log(regex.test('alidas')); 

const pattern2='/[abc]/';

let input='asf';
console.log(input.search(pattern2));





