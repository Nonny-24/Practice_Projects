//Create a script that declares and initializes variables of different data types
let name = 'Nonhlanhla';
console.log(name, typeof name);

let age = 22;
console.log(age, typeof age);

let isStudent = true;
console.log(isStudent, typeof isStudent);

let address = {
    city:'Gauteng',
    country: 'South Africa',
};
console.log(address, typeof address);

let hobbies = ['basketball', 'gardening', 'cooking', 'swimming', 'painting'];
console.log(hobbies, typeof hobbies);

let undefinedVariable;
console.log(undefinedVariable, typeof undefinedVariable);

let nullVariable = null;
console.log(nullVariable, typeof nullVariable);

//JavaScript program that prompts the user for their name and age, then calculates and alerts the year they were born.
let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");

userAge = parseInt(userAge);

let currentYear = new Date().getFullYear();

let yearOfBirth = currentYear - userAge;

alert(`Hello, ${userName}! You were born in the year ${yearOfBirth}.`);