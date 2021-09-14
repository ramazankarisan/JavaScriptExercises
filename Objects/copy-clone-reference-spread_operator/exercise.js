/* 1. Combining Arrays. Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
Once again create two arrays. Save all elements of both arrays to another variable. */

// let euroCountries = ['germany', 'italy', 'france', 'spain'];
// let asianCountries = ['china', 'india', 'japan'];


// console.log(euroCountries.concat(asianCountries));

// let countries = [ ...euroCountries, ...asianCountries];
// console.log(countries);


/* 2. Copying Arrays. Copy an array using the spread operator. Store the copied array in another variable. */

// let numbers = [1, 2, 6, 9, 12, 65, 22, 78]

// let numbers2 = [...numbers];

// console.log(numbers2);

/* 3. Find the Largest. Create a function to find the largest number in an array. */

// let largestNum = arr => Math.max(...arr)

// let numbers = [1, 2, 6, 9, 87, 12, 65, 22, 78];

// console.log(largestNum(numbers));


/* 4. Find the Smallest. Create a function to find the smallest number in an array. */

// let smallestNum = arr => Math.min(...arr)

// let numbers = [1, 2, 6, 9, 12, 65, 22, -2, 78];

// console.log(smallestNum(numbers));


/* 5. Clone and Merge. 
    Given two objects:

    const person = {name: "John"}
    const job = {role: "Teacher"}

    5.1 Clone the person object.
    5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
    5.3 Then change the values of the properties in the employee object. */


// 5.1 

// const person = {name: "John"}
// const job = {role: "Teacher"}

// let person1 = Object.assign({}, person);
// console.log(person1);

// // 5.2

// let employee = {...person, ...job}
// console.log(employee);

// // 5.3

// employee.name = 'Jonas';
// employee.role = 'manager';
// console.log(employee);

/* 6. Is the average a whole number? Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
    Examples
    isWhole(1, 2, 3, 4) ➞ false
    isWhole(9, 2, 2, 5) ➞ false */

// let isWhole = (...arg) => {
//   let num = 0;
//   for (let item of arg) {
//     num += item
//   }
//   let average = (num)/arg.length;

//   return Number.isInteger(average)
// }
// console.log(isWhole(1, 2, 3, 4));

// console.log(isWhole(4, 6, 3, 7));