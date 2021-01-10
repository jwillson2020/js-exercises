/*
The objects below have some syntax issues - try and fix them all!
*/

let kitten = {
    furColor: "orange",  // uk spelling colour??? not color space added caps
    age: 23 ,  // not comer, is this Meant to be a string???  missing :
};

let laptop =  {    // added bracket
    brand: "Lenovo",   // missing comer
    ram: "5GB",   // added comer, addded :
}; // added ;

let phone = {
    operatingSystem: "iOS",  // added : removed space
    hasStylus: true,    // looks ok
    megapixels: 12,  // addded comer added :
    batteryLife: "24 hours", // why "" added comer
}; // missing };

console.log(kitten,laptop,phone);