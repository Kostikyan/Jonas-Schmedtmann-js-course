// continue of script.js

/*

// 5 falsy values: 0, '', undefined, null, NuN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

// moneyToBoolean var value = 0, and in convertion it will be converted into false
// because 0 is falsy value.
// will be executed code in else block
const moneyToBoolean = 0;
if (moneyToBoolean) {
    console.log("don't spend it all :0");
} else {
    console.log("u should get a job!");
}

let hightToBoolean; // undefined value
if (hightToBoolean) {
    console.log("!!!");
} else {
    console.log(":O");
}

const age = 18;
if (age === 18) console.log('You just became an adult :D');

console.log(18 === 18); // true
console.log(18 === '18'); // false
console.log(18 == '18'); // true

const favourite = prompt("What's your favourite number?"); // we can imput something in website...
console.log(favourite); // typeof: string

// else-if example
if (favourite == 23) console.log("cool, 23 is amazing number!"); // loose equality operator, '23' == 23
else if (favourite == 7) console.log("else if test, 7");
else if (favourite == 8) console.log("else if test, 8");
else console.log("not 7,8 and 23");

if (favourite !== 23) console.log("why not 23?");

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // the result of: true AND true will be true
console.log(hasDriversLicense || hasGoodVision); // false || true = true
console.log(!hasDriversLicense); // always false

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) console.log("should drive");

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired); // true


// SWITCH CASE

const day = 'monday';

switch (day) {
    case 'monday':
        console.log("monday");
        break;

    case 'tuesday':
    case 'wednesday':
        console.log("tuesday, wednesday");
        break;

    default:
        console.log("another day");
}

*/

// TERNARY

const age = 19;
age >= 18 ? console.log("older than 18") : console.log("smaller than 18");
console.log(`drink ${age >= 18 ? 'wine' : 'water'}`);
