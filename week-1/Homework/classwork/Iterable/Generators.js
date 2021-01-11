
//Generators

// marked with * after function 

function* count() {

  yield 1;  // works as a pause???
  yield ;  // returns undefined as no number 
  yield 3; 
}

var generator = count();
 
//generator {};

generator.next();
generator.next();
generator.next();
generator.next();