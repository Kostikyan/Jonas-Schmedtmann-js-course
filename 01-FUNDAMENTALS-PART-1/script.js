// its not real program, this "project" only for build a fundament.

// in this file my tests.

let js = 'amazing';

if (js === 'amazing') {
    alert("a");
}

let someExpression = 40 + 8 + 23 - 10;
console.log(someExpression);

// let firstName = "Bob";
// let secondName = "Marley";
// let age = 16;

// console.log(
//     firstName + " " +
//     secondName + " " +
//     age + " years old"
// );

// test Date.now() function
const currentData = Date.now();
console.log(currentData + " test now date")

const PI = 3.14;

// not illegal but bad:
let job1 = 'programmer'
let job2 = 'teacher'

// much better than job1 and job2
let myFisrtJob = "Programmer";
let myCurrentJob = "Teacher";

// line comment type in js
/* text comment type in js */

let booleanTrueValue = true;
let booleanFalseValue = false;
let booleanExample = 1 + 1 == 2; // it's will be true because 1+1 = 2

// types of values
console.log(typeof true);
console.log(typeof booleanExample);
console.log(typeof 23);
console.log(typeof "Thomas");
console.log(typeof null); // typeof null is object, its bug in js

// we can change type of value: 
booleanTrueValue = "a"
// now variable booleanTrueValue's type is String and value is "a"

// it will be print in console: string
console.log(typeof booleanTrueValue)

// example of type undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
// after line 59 variable year not undefiend, its number
console.log(typeof year);

/*
in js we have 3 keywords for declare varibales:
 
let
var
const
*/

// i change value from 30 to 31, because i used keyword let for variable someAge
let someAge = 30;
someAge = 31;

// we cant change const's value. const variables are immutable
const birthYear = 1991;
// birthYear = 1990; 

// const job; // this using of const also wrong, because we need to initialize value

// var is the old way to declare variable
// we can change and didn't get any errors
// let is block-scoped, var is function-scoped
var job = "programmer";
job = "teacher";


/*
also we can declare variable by not using any keyword:

it will still work but:

this is actually a pretty terrible idea, because this doesn't create a variable in the current so-called scope. Instead, JS will create a property on a global object.
*/
noKeywordVariable = "noKyw";
console.log(noKeywordVariable);

// output: string
console.log(typeof noKeywordVariable);


// OPERATORS:

// minus (-)
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// divide and multiply (/ & *)
console.log(ageJonas * 2, ageJonas / 10);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(2 ** 3);

// aslo we can use operator + for concatenate strings
const firstName = "jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// we have there 2 operators: = and +
let x = 10 + 5; // 15
x += 10; // x = x + 10 (=25)
console.log(x); // output: 25

// Assignment operators
// also we can use *= -= /=
x *= 2; // x = x * 2
x /= 2; // x = x / 2
x++; // x = x + 1 (++x)
x--; // x = x - 1 (--x)

// Comparison operators 
// (>, <, <=, >=)
// results false or true
console.log(ageJonas <= ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18; // boolean

// calculations are done before comparison operators
console.log(now - 1991 > now - 2018);

// left-to-right operation example
console.log(25 - 10 - 5);

// right-to-left operation example
let z, y;
z = y = 25 - 10 - 5; // 25-10-5=10 -> y=10 -> z=y
console.log(z, y);

// example of grouping - ()
const averageAge = (ageJonas + ageSarah) / 2; // we need to use ()
console.log(ageJonas, ageSarah);



// STRINGS:

const firstName_1 = 'Jonas';
const job_1 = 'teacher';
const birthYear_1 = 1991;
const jonas = "I'm " + firstName + ', a ' + (now - birthYear) + " years old " + job_1;
console.log(jonas);

// a lot better method: 
const jonasNew = `I'm ${firstName}, a ${now - birthYear} years old ${job_1}!`;
console.log(jonasNew);

// it works just the same
console.log(`Just a regular string...`);

// using \n\
console.log('String with \n\ multiple \n\ lines');

// better method for wrapping: 
console.log(`String with
multiple
lines`)

// IF / ELSE STATEMENTS

const age_1 = 19;
const isOldEnough = age_1 >= 18;

// if boolean value isOldEnough == true, then code in if's block will be executed  
// also i can replace age_1 >= 18 condition in if, and its will be same
if (isOldEnough) {
    console.log("Sarah can start driving license 🚗")
} else {
    const yearsLeft = 18 - ageJonas;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :))))`);
}

let century;
const birthYear_2 = 1991;
if (birthYear_2 <= 2000) {
    century = 20;
} else {
    century = 21;
    let a; // this variable can used only in else block
}
console.log(century);


