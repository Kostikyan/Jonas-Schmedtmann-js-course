'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};
// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

///////////////////////////////////
// String Methods Practice

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for(const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    let newType = type.startsWith("_Delayed") ? type.replace('_', '🔴 ') : type;
    const output = `${newType.replaceAll('_', ' ')} from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()} ${time.replace(':', 'h')}`;
    console.log(output.padStart(43, ' '));
}

/*
///////////////////////////////////
// Strings - part 3

console.log('a+very+nice+string'.split('+'));
console.log('Vahe Kostikyan'.split(' '));

const [firstName, lastName] = 'Vahe Kostikyan'.split(' ');
console.log(lastName); // Kostikyan

let newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Vahe KOSTIKYAN

const passenger = 'jessica ann smith davis';
const capitalizeName = function (name) {
    let split = name.split(' ');
    let namesUpper = [];

    for (const n of split) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1)); // first method
        namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // second method, it gives the same result
    }

    console.log(namesUpper.join(' '));
}
capitalizeName(passenger);
capitalizeName('vahe kostikyan');

// Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+')); // ++++++++++++Go to gate 23 (length = 25)
console.log('Jonas'.padStart(25, '+')); // ++++++++++++++++++++Jonas (length = 25)
console.log('PadEndStart'.padStart(15, '+').padEnd(25, '+')); // ++++PadEndStart++++++++++ (length = 25)

// Real world example
const maskCreditCard = function (number) {
    const str = String(number);
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(4333434343420213));
console.log(maskCreditCard(123123123));
console.log(maskCreditCard('213892138921789123'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...'
console.log(message2.repeat(5));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

/*
///////////////////////////////////
// Strings - part 2

const airline = 'TAP Air Portugal';
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail); // hello@jonas.io

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); // hello@jonas.io
console.log('comparing emails: ' + (normalizedEmail === email));

// replacing
const priceUS = '288,97$';
const priceRU = priceUS.replace('$', 'RUB').replace(',', '.');
console.log(priceRU) //288.97RUB

const announcement = 'All passenger come to boarding door 23. Boarding door 23!';

// SAME RESULT 77:78
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';

console.log(plane.includes('A32')); // true
console.log(plane.includes('A31')); // false
console.log(plane.startsWith('Air')); // false

if(plane.startsWith('Airbus') && plane.endsWith('neo'))
    console.log('Part of the new airbus family')

// Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun'))
        console.log('Ur NOT allowed on board');
    else
        console.log('Welcome aboard!');
}
checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
///////////////////////////////////
// Strings - part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B
console.log(airline.length); // 16
console.log("B737".length); // 4

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')) // 8

// slice(0) based
// only with start index
console.log(airline.slice(4)); // Air Portugal

// with
// start 4, end 7
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

function checkMiddleSeat(seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E')
        console.log('You got the middle seat');
    else
        console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas')); // object

console.log(typeof new String('jonas').slice(-1)); // string
*/

/*
///////////////////////////////////
// Map Iteration
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 2],
    [true, 'Correct!'],
    [false, 'Try again!'],
]);

console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);

}

// let answer = Number(prompt('Your answer: '));
const answer = 2;
console.log(answer);

console.log(question.get(answer === question.get('correct')));

// Convert Map to Array
console.log([...question])
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
*/

/*
///////////////////////////////////
// Maps

const rest = new Map();
rest.set('Key', 'Value');
console.log(rest.get('Key'));

rest.set('Name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('a', 'b')
    .set('l', 'n')
    .set('true', true)
    .set('a', 12)
    .set('false', false);

console.log(rest.get('categories'));
console.log(rest);

console.log(rest.has('categories')); // true
console.log(rest.delete(23)); // false
// console.log(rest.delete(2)); // true

console.log(rest.size); // 9
// rest.clear();
// console.log(rest) //Map(0) {}

rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); // undefined

const arr = [2, 3];
rest.set(arr, 'Test2');
console.log(rest.get(arr)); // Test2

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get('h1'))
*/

/*
///////////////////////////////////
// Sets

const ordersSet = new Set([
    'Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'
]);

console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto' }
console.log(new Set('Jonas')); // Set(5) { 'J', 'o', 'n', 'a', 's' };
console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

console.log(ordersSet); // Set(4) { 'Pasta', 'Pizza', 'Risotto', 'Garlic Bread' }

ordersSet.delete('Risotto');
console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Garlic Bread' }

console.log(ordersSet[0]); // undefined

// ordersSet.clear(); // REMOVE ALL

for (const order of ordersSet) {
    // Pasta
    // Pizza
    // Garlic Bread
    console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // [ 'Waiter', 'Chef', 'Manager' ]
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); // 3
console.log(new Set('vahekostikyan').size); // 11
*/

/*
///////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
    openStr += `${day}, `;
}
console.log(openStr)

// Property VALUES
let values = Object.values(openingHours);
console.log(values);

// Property Entries
let entries = Object.entries(openingHours);
console.log(entries);

for (const [day, {open, close}] of entries) {

    console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

/*
///////////////////////////////////
// Optional Chaining (?.)

if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    // console.log(day);
    let open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(open);
}

// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exits');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exits');

// Arrays
const users = [
    {name: 'Jonas', email: 'hello@jonas.io'}
]
// const users = []

console.log(users[0]?.name ?? 'User array empty');

if(users.length > 0) console.log(users[0].name)
else console.log('user array empty');
*/
/*
///////////////////////////////////
// The for-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
    console.log(item);
}

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
*/

/*
///////////////////////////////////
// assignment operators

const rest1 = {
    name: 'Carpi',
    // numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name: 'La Pizza',
    owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
///////////////////////////////////
// The Nullish Coalescing Operator

restaurant.numGuests = 0;

const guest = restaurant.numGuests || 10;
console.log(guest);

// Nullish: null, undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
///////////////////////////////////
// Short Circuiting (&& and ||)

console.log('----- OR -----')
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null); // result: hello

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND -----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

// practical example
if(restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
///////////////////////////////////
// Rest Pattern and Parameters

// 1) Destructuring
// Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions
// rest parameters
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
    ;
}
add(2, 3);
add(5, 3, 7, 2);
add(1, 3, 3, 2, 32, 11, 23);

const x = [23, 7, 8];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*
///////////////////////////////////
// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...mainMenuCopy);
console.log(...menu);

// Iterables: Arrays, Strings, Maps, Sets. NOT OBJECTS!
const str = 'Jonas';
const letters = [...str, ' ', 'S'];
console.log(letters);
console.log(...str);
console.log('J', 'o', 'n', 'a', 's');
// console.log(`${...str}`); // wrong ... example

// Real-world example
const ingredients = [prompt('first ingredient'), prompt('second'), prompt('third')]
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1999, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant}; // its just copy, not one object
restaurantCopy.name = 'Ristaurante Roma'; // this code changes only copy's name
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
///////////////////////////////////
// DESTRUCTING OBJECT
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2
});

restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1
});

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b);

// Nested Objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
*/

/*
///////////////////////////////////
// DESTRUCTING ARRAY
const arr = [1, 2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

const [x, y, z, n] = arr;
console.log(x, y, z, n);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
let [starter, mainCourse] = restaurant.order(1, 2);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// let [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Def values
// const [p, q, r] = [8, 9];
// console.log(p,q,r); // r == undefined

const [p = 1, q = 1, r = 1] = [9];
console.log(p,q,r); // 9 1 1

*/