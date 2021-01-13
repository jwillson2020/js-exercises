
//https://www.youtube.com/watch?v=NIq3qLaHCIs&t=96s



const  alphabet = ['A', 'B' ,'C', 'D' ,'E' ,'F'];


const  numbers = ['1', '2' ,'3', '4' ,'5' ,'6'];

//const newArray =  alphabet.concat(numbers); // all letter & numbers in one new array

const newArray2 = [...alphabet, ...numbers] //does the same as above

//console.log(newArray);
console.log(newArray2);

