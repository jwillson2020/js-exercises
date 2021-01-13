
const personOne = {

    name: 'Kyle',
    age: 24,
address: {
city: 'somewhere',
state: 'one of them',
}

}

const personTwo = {

    name: 'sally',
    age: 23,
address: {
city: 'somewhere else',
state: 'another state',
}
}
//  const {name , age } = personOne;
const {name: firstName, age , favouriteFood = 'rice' } = personTwo;

console.log(firstName);
console.log(age);
console.log(favouriteFood);

