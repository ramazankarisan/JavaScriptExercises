// ******** Advanced Array Methods ***************

// ******************* Array.reduce() *********************

// • The Array.reduce( ) method calls a function on each array element to produce (reduce it to) a single value.
// • The Array.reduce( ) method works from LEFT-TO-RIGHT in the array.
// • The Array.reduce( ) method does not reduce the original array.

// const books = [
//   {
//   id: 1,
//   type: 'classics',
//   name: 'To Kill a Mockingbird',
//   price: 18.04,
//   discount: true,
//   },
//   {
//   id: 2,
//   type: 'classics',
//   name: 'Little Women',
//   price: 6.17,
//   discount: false, 
//   },
//   {
//   id: 3,
//   type: 'comics',
//   name: 'Watchmen',
//   price: 10.84,
//   discount: false,
//   },
//   {
//   id: 4,
//   type: 'comics',
//   name: 'The Walking Dead',
//   price: 30.05,
//   discount: true,
//   },
//   {
//   id: 5,
//   type: 'mystery',
//   name: 'The Night Fire',
//   price: 18.90,
//   discount: true,
//   },
//   {
//   id: 6,
//   type: 'adventure',
//   name: 'Life of Pi',
//   price: 7.50,
//   discount: false,
//   },
//   ]; 


  // let totalPrice = books.reduce(function(total, item) {
  //  return total + item.price
  // },0);  // without initial value it does not work properly

  // console.log(totalPrice);

// with destructuring
// let totalPrice = books.reduce(function(total, {price}) {
//   return total + price
//  },0); 

//   let totalPrice2 = books.reduce((total, item) => total + item.price, 0);  // without initial value it does not work properly
//   console.log(totalPrice2);
 

// let priceToPay = books.filter(item => item.discount === true).reduce((total, value) => total + (value.price * 0.9), 0).toFixed(2);
// console.log(priceToPay);


// *************** sort() ****************************

// It sorts the array in place, changing its element order.
// • The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16
// code units values.

// Array.sort( ) with strings is easy just use it directly
// Array.sort( ) with numbers is like this ⬇️⬇️⬇️⬇️⬇️⬇️⬇️

// let numbers = [2, 4, 34, 867, 22, 1, 0 ,10000, 55];
// console.log(numbers.sort((a, b) => a - b)); // ascending [ 0, 1, 2, 4, 22, 34, 55, 867, 10000 ]
// console.log(numbers.sort((a, b) => b - a));  // descendeing  [ 10000, 867, 55, 34, 22, 4, 2, 1, 0 ]


// array is ⬆️⬆️⬆️⬆️⬆️⬆️⬆️ above

// let bookNamesSorted = books.map(book => book.name).sort();
// console.log(bookNamesSorted);

// let cheapestBook = books.sort((obj1, obj2) => obj1.price - obj2.price)[0]; // sorted in ascending order
// console.log(cheapestBook);
// let expensiveBook = books.sort((obj1, obj2) => obj1.price - obj2.price)[books.length - 1]; // sorted in ascending order
// console.log(expensiveBook);

const books = [
  {
  id: 1,
  type: 'classics',
  name: 'To Kill a Mockingbird',
  price: 18.04,
  discount: true,
  rate: 4.7
  },
  {
  id: 2,
  type: 'classics',
  name: 'Little Women',
  price: 6.17,
  discount: false,
  rate: 4.3
  },
  {
  id: 3,
  type: 'comics',
  name: 'Watchmen',
  price: 10.84,
  discount: false,
  rate: 3.7
  },
  {
  id: 4,
  type: 'comics',
  name: 'The Walking Dead',
  price: 30.05,
  discount: true,
  rate: 4.9
  },
  {
  id: 5,
  type: 'mystery',
  name: 'The Night Fire',
  price: 18.90,
  discount: true,
  rate: 4.1
  },
  {
  id: 6,
  type: 'adventure',
  name: 'Life of Pi',
  price: 7.50,
  discount: false,
  rate: 4.0
  },
  ]; 

  // let lowRatedBook = books.sort((obj1, obj2) => obj1.rate - obj2.rate)[0]
  // console.log(lowRatedBook);
  // let mostRatedBook = books.sort((obj1, obj2) => obj1.rate - obj2.rate)[books.length - 1];
  // console.log(mostRatedBook);

// ***************** thisArg ************************

// // as far as I understood if we want to use an objectMethod inside of an advanced array method as function, we have to add 'thisArg' (means objectName) at the end of the array methods parameters 

// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin: function (user) {
//         // console.log(this);
//         // console.log(user.age >= this.minAge && user.age < this.maxAge);
//         // console.log('----------------------')
//         return user.age >= this.minAge && user.age < this.maxAge;
//     }
// }

// let users = [
//     { name: 'John', age: 16 },
//     { name: 'Mike', age: 23 },
//     { name: 'Joe', age: 28 },
//     { name: 'Jonas', age: 20 },
// ]

// // users.forEach(army.canJoin, army);

// let soldiers = users.filter(army.canJoin, army);
// console.log(soldiers);

// **************************++ how to get unique items from an array ******************************

let numbers = [1, 3, 4, 8, 3, 578, 12, 4, 221, 1];

//  ****++ longer way ******
// let newArr = [];
// for (let item of numbers) {
//   if (newArr.includes(item)) {
//     continue;
//   } else {
//     newArr.push(item);
//   }
// }
// console.log(newArr);

// ******* shorter way *******

// let newNumbers = new Set(numbers); // Set { 1, 3, 4, 8, 578, 12, 221 }  it returns a set object with unique items
// console.log(newNumbers);

// let newNumbersArray = [...newNumbers]; // 1. option to convert in Array with Spread operator 
// let newNumbersArray = Array.from(newNumbers) // 2. option to convert in an Array with Array.from()
// console.log(newNumbersArray);

// console.log([...new Set(numbers)]); // at same time getting the unique numbers from an array and create a new array with those


