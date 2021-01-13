const personOne = {

    name: 'Kyle',
    age: 24,
    // no fav food
address: {
city: 'somewhere',
state: 'one of them',
}

}

const personTwo = {
// no name 
    age: 23,
    favouriteFood: 'melon', // overrides rice
// no address
}

const personThree = {...personOne, ...personTwo};

console.log(personThree);

/* {
  name: 'Kyle', // adds in name as there is none on personTwo 
  age: 23, // override age: 24' of personOne
  address: { city: 'somewhere', state: 'one of them' }, // adds in address
  favouriteFood: 'melon' // still shows favfood as not on personOne
} */
