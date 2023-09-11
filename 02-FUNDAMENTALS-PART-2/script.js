'use strict'; // activate strict mode (easy to write a secure JavaScript code)

/*
function logger(info) {
    console.log(info);
}

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// arrow function
const calcAge3 = birthYear => 2037 - birthYear;

const yearsUntilRetirement =  (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

// Functions Calling Other Functions Example
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    let applePieces = cutFruitPieces(apples);
    let orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement =  (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

// ARRAYS
const friendOne = 'Michael';
const friendTwo = 'Steven';
const friendThree = 'Peter';

let friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years1 = new Array(1991, 1992, 1993, 1994, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // elements count
console.log(friends[friends.length - 1]); // last element

friends[2] = 'Jay'; // we can change
console.log(friends);

// friends = ['Bob', 'Alice']; // we can change all
// console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Muhammad', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length)

const calcAge = birthYear => 2037 - birthYear;
const years = [1991, 2002, 1930, 2003, 2006, 2020];
console.log(calcAge(years)); // NaN

let age1 = calcAge(years[0]);
let age2 = calcAge(years[2]);
let age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3)

const ages = [
    calcAge(years[0]),
    calcAge(years[2]),
    calcAge(years[years.length - 1])
];
console.log(ages);

// ARRAY METHODS
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // add element as last
console.log(newLength); // result: friends.length

friends.unshift('John'); // add element as first

const popped = friends.pop(); // remove the last element of array
console.log(popped); // result: 'Jay', because Jay was removed

let shifted = friends.shift(); // remove the first element of array
console.log(shifted); // result: 'John', because John was removed

console.log(friends.indexOf('Steven')); // result: 1, because friends[1] = 'Steven'
console.log(friends.indexOf('Bob')); // result: -1, because 'Bob' is not element of array
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false

friends.push(23);
console.log(friends.includes('23')); // false, because it use === not ==
console.log(friends.includes(23)); // true

if (friends.includes('Peter')) {
    console.log("You have a friend called Peter!");
}
console.log(friends);




const jonasArray = [
    'Anun',
    'Azganun',
    2037 - 1990,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

// OBJECTS
const objectArray = {
    firstName: "Vahe",
    lastName: "Kostikyan",
    age: 16,
    job: "student",
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(objectArray);

// DOT NOTATION
console.log(objectArray.firstName);

// BRACKET NOTATION
console.log(objectArray["lastName"]);

const nameKey = 'Name';
console.log(objectArray['first' + nameKey]);
console.log(objectArray['last' + nameKey]);

// console.log(objectArray.first + nameKey) we cant use like that
// console.log(objectArray.'first' + nameKey) we cant use like that

const interestedIn = prompt('firstName, lastName, age, job, friends');
console.log(objectArray.interestedIn); // undefined
console.log(objectArray[interestedIn]); // correct result

if (objectArray[interestedIn]) {
    console.log(interestedIn);
} else {
    console.log("wrong request! Choose between firstName, lastName, age, job, friends");
}

objectArray.location = 'Portugal';
objectArray['twitter'] = '@SomeTwitter';

console.log(objectArray);

console.log(`${objectArray.firstName} has ${objectArray.friends.length} friends, and his best friend is called ${objectArray.friends[0]}`);


// OBJECT METHODS

const jonas = {
    firstName: "Vahe",
    lastName: "Kostikyan",
    birthYear: 2006,
    job: "student",
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriveLicense: true, // (no)

    // inner object's function
    // method
    calcAge: function () {
        return 2023 - this.birthYear;
    },

    // method
    logger: function () {
        console.log(this);
    }
}

console.log(jonas.calcAge(jonas.birthYear));
console.log(jonas['calcAge'](jonas.birthYear)); // same
jonas['logger']();

// console.log("repeat message");
// console.log("repeat message");
// console.log("repeat message");
// console.log("repeat message");
// console.log("repeat message");
// console.log("repeat message");
// console.log("repeat message");
// console.log("repeat message");
// console.log("repeat message");
// console.log("repeat message");

for (let i = 1; i <= 10; i++) {
    console.log("repeat message " + i);
}

let array = [
    'Michael',
    'Steven',
    'Peter',
    1000,
    'John',
    true
];
let types = [];
for (let i = 0; i < array.length; i++) {
    console.log(array[i] + ' is ' + typeof array[i]);
    types.push(typeof array[i]);
}
console.log(types);

const years = [1991, 2007, 2020., 1961];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}
console.log(years);
console.log(ages);

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') continue;
    console.log(array[i] + ' is ' + typeof array[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') break;
    console.log(array[i] + ' is ' + typeof array[i]);
}

// Looping Backwards and Loops in Loops

let array = [
    'Michael',
    'Steven',
    'Peter',
    1000,
    'John',
    true,
    ['Joa', 'Noa', 'Soa']
];

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- String exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weights repetition ${rep}`)
    }
}

*/

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`)
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(dice);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end");
}