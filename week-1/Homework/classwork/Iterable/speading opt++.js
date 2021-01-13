

//https://www.youtube.com/watch?v=NIq3qLaHCIs&t=96s


const  alphabet = ['A', 'B' ,'C', 'D' ,'E' ,'F'];


const  numbers = ['1', '2' ,'3', '4' ,'5' ,'6'];

//const a = alphabet[0]; // returns A  uses index of array
//const b = alphabet[1];   // returns B   
//const c = alphabet[2]; //returns C

//const [a, b, c] = alphabet; // does the same as the above 3

//const [a,, c] = alphabet; // Returns A C skips B

const [a,, c , ...rest] = alphabet; // A & C and rest(own name) [ 'D' ,'E' , 'F']
// ... EQUALS Spread notation
console.log(a);
//console.log(b);
console.log(c);
console.log(rest);
