/*
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

1. Create an array called bills containing all 10 test bill values.

2. Create empty arrays for the tips and the totals (tips and totals)

3. Use the calcTip function we wrote before (included in the starter code)
to calculate tips and total values (bill + tip) for every bill value in
the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:

Write a function calcAverage which takes an array called arr as an argument.
 This function calculates the average of all numbers in the given array. This is
 a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition,
start by creating a variable sum that starts at 0. Then loop over the array using
a for loop. In each iteration, add the current value to the sum variable. This way,
by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of
the array (because that's the number of elements).

Call the function with the totals array.

*/

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

function calcTotal(bill, tip) {
    return bill + tip;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTotal(tips[i], bills[i]));
}

console.log(tips);
console.log(totals);

// BONUS
const calcAverage = function (arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    sum /= arr.length;
    return sum;
}

console.log(calcAverage(totals));