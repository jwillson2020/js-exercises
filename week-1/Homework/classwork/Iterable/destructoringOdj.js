
const personOne = {

    name: 'Kyle',
    age: 24,
address: {
city: 'somewhere',
state: 'one of them',
}

}

const personTwo = {

    name: 'sally', // firstName and name
    age: 23,
    favouriteFood: 'melon', // overrides rice
address: {
city: 'somewhere else',
state: 'another state',
}
}

//  const {name , age } = personOne; //can't use age twice??
const {name: firstName, age , favouriteFood = 'rice', ...rest } = personTwo;
//const {...rest } = personTwo; return whole object
const {address: {city}} = personTwo;

console.log(firstName); // return sally
console.log(age); // return 23, 
console.log(favouriteFood); // returns rice
console.log(rest); // returns { address: { city: 'somewhere else', state: 'another state' } }
console.log(city); // somewhwere else