
//https://www.youtube.com/watch?v=X0ipw1k7ygU&feature=emb_logo

//Modern JavaScript Tutorial #5 - Object

let user = {  // literal object = {}

name: 'Crystal',
age: 30,
email: 'cyrstal@yahoo.co.uk',
Location: 'Berlin',
blog:  ['10 things ',' why coding is']
};

console.log(user);
console.log(user.name);

user.age = 35; // changes age to 35
console.log(user.age); // .notation
console.log(user['email']); // bracket form