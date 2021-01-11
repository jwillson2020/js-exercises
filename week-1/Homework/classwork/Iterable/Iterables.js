
//https://www.youtube.com/watch?v=uhuGhfjqBk4

//Understanding Iterators and Iterables in JavaScript

//Spread operators

//[] arrays mainly   [1,2,3] // 1,2,3

const arr = [1,2,3];

console.log (...arr);  // 1 2 3

console.log ([...arr]); // [1,2,3]

function fun (...args)  // three dots why ??? 
{
    console.log(args) //  placeholder (...arg)
}

fun(1,2,3);  // [1,2,3]

fun(4,5,6);  //  [4,5,6]  