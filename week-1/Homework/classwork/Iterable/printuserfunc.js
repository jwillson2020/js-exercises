

const personOne = {

    name: 'Kyle',
    age: 24,
address: {
city: 'somewhere',
state: 'one of them',
}

}

/*function printUser (user) {
 console.log(user);
} */

//printUser(personOne);
/*{
    name: 'Kyle',
    age: 24,
    address: { city: 'somewhere', state: 'one of them' }
  }
  */


function printUser({name, age}) {
   console.log(${name} , ${age}); // with the key
   };



printUser(personOne);

