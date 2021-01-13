

function sumMulti(a,b) {

    return [a+b, a*b, a/b]; // add multiply  divided
}

const array = sumMulti(2,3); // (2+3=5)   (2*3=6)
const [sum, multiply, division = 'no division'] = sumMulti(2,3); // (2+3=5)   (2*3=6)

console.log(array); // returns [5,6];

console.log(sum); //  returns sum only (line 9 )  5
console.log(multiply); // returns multiply only (line 9)  6
console.log(division); // returns 'no division' or 6.66666
console.log(Math.round(division)); //ROUND TO WHOLE NUMBER 1
console.log(Math.round((division)*100 )/100); // Round to 2 places 0.67
