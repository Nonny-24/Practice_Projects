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

//Conditional Logic Practice. Write a script to check if a number is positive, negative, or zero and print an appropriate message to the console.
let number = -3;

if (number > 0) {
    console.log(number + " is positive");
}

else if (number < 0) {
    console.log(number + " is negative");
}

else {
    console.log(number + " is zero");
}

//Looping Through Numbers. Use a for loop to print numbers 1 through 10 to the console.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Basic Function Creation. Write a function that takes two numbers as parameters and returns their sum.
function sum(num1, num2) {
    return num1 + num2;
}

let result = sum(24, 100);
console.log(result);

//DOM Manipulation Task. Select a paragraph element by its ID and change its text content to “Hello, DOM!”.
let paragraph = document.getElementById('greeting');
paragraph.textContent = 'Hello, DOM!';

//Event Handling Task. Add an event listener to a button that changes the button’s text to “Clicked!” when it is clicked.
const button = document.getElementById('clickButton');
button.addEventListener('click', function() {
    button.textContent = 'Clicked!';
});

//Hover Effect Task. Create a hover effect on list items that changes their background color when hovered over.
let listItems = document.querySelectorAll('.hover-item');

listItems.forEach(function(item) {
    
    item.addEventListener("mouseover", function() {
        item.style.backgroundColor = "green";  
    });

    item.addEventListener("mouseout", function() {
        item.style.backgroundColor = "";  
    });
});