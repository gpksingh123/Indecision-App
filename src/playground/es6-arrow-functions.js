const square = function (x) {
    return x * x
};

// const squareArrow = (x) => {
//     return x*x
// };

const squareArrow = (x) => x * x;

// console.log(square(8))


//Challenege - use arrow functions
//  getFirstname('Mike Smith') -> "Mike"
//  create regular arrow function
//  create array function using shorthand syntax

//Regular arrow function
const getFirstNameReg = (fullName) => {
    let firstName = fullName.split(' ')[0];
    return firstName
}

const getFirstNameShort = (fullName) => fullName.split(' ')[0];


console.log("Regular ", getFirstNameReg('Sona Singh'));
console.log("Short ", getFirstNameShort("Sona Singh"));
