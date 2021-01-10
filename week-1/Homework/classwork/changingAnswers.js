/*
Write code in the space provided so that the expected values output
*/

let dog = {
    name: "Billy",
    wantsToPlay: false,
  };
  
  // WRITE CODE BELOW THIS LINE
  //let dog2 = {
   // name: "Rex",                  
  //  wantsToPlay: true,
  //};
 
  dog.name = "Rex";  // changes name can't use let 
dog.wantsToPlay = true; // over rides false

  // WRITE CODE ABOVE THIS LINE
  
  console.log(dog.name);
  console.log(dog.wantsToPlay);
  
  // -> it should output:
  // Rex
  // true