/* *************** Advanced Array Methods ************* */

// ************* 1) Array.forEach() ***************
// let numbers = [ 10, 12, 6, 33, 50, 2, 7];

// let total = 0;
// numbers.forEach(function (item) {
//   total += item;
// });
// console.log(total);


// ****************** with forEach method ***************

// let newTrippleNumbers = [];

// numbers.forEach(function (item) {
//   let tripple = item * 3;
//   newTrippleNumbers.push(tripple);
// });
// console.log(newTrippleNumbers);

// ************************ with map method ********************* 
// let resultMapArray = numbers.map(function (item) {
//   return item * 3;
// });
// console.log(resultMapArray);

// *******************  with map method, arrow function ***************************

// let resultMapArray2 = numbers.map((elem, index, array) => {
//   let trip = elem * 3;
//   return trip;
// });
// console.log(resultMapArray2);

// let resultMapArray2 = numbers.map(elem => elem * 3);
// console.log(resultMapArray2);

// let cart = [
//   {
//     name: 'prod1',
//     price: 100
//   },
//   {
//     name: 'prod2',
//     price: 57
//   },
//   {
//     name:'prod3',
//     price: 33
//   }
// ]

// let priceArray = cart.map( product => product.price);
// console.log(priceArray);

// let sum = 0;
// priceArray.forEach((item) => sum += item);
// console.log(`total price : ${sum}`);


// 3- ************** Array.filter() ********************

// The Array.filter() method creates A NEW ARRAY with array elements that PASSES the test.

const books = [
  {
  id: 1,
  type: 'classics',
  name: 'To Kill a Mockingbird',
  price: 18.04,
  discount: true,
  },
  {
  id: 2,
  type: 'classics',
  name: 'Little Women',
  price: 6.17,
  discount: false, 
  },
  {
  id: 3,
  type: 'comics',
  name: 'Watchmen',
  price: 10.84,
  discount: false,
  },
  {
  id: 4,
  type: 'comics',
  name: 'The Walking Dead',
  price: 30.05,
  discount: true,
  },
  {
  id: 5,
  type: 'mystery',
  name: 'The Night Fire',
  price: 18.90,
  discount: true,
  },
  {
  id: 6,
  type: 'adventure',
  name: 'Life of Pi',
  price: 7.50,
  discount: false,
  },
  ]; 

  // let bookNames = books.map(book => book.name);
  // console.log(bookNames);

// filter the books with price range 10-20

// let booksPrice10to20 = books.filter( book => book.price >= 10 && book.price <= 20);
// console.log(booksPrice10to20);

// filter the books with sale

// let bookInSale = books.filter(book => book['discount'] === true);
// console.log(bookInSale);

// let bookInSale2 = books.filter(book => book.discount);
// console.log(bookInSale);

// filter the books, name starts with 'L' or 'l'

// let booksWithL = books.map(book => book.name).filter(name => name.toLowerCase().startsWith('l'));
// console.log(booksWithL);

// ********** Array.find method *********

// The Array.find() method returns the value of the FIRST MATCH array element that passes a test.

// ***** array books is above. *****

// let result = books.find(book => book.name.startsWith('L'));
// console.log(result);

// let result2 = books.find(book => book.name.startsWith('H')); // if there is no match then returns 'undefined'
//  console.log(result2);

// **************** Array.findIndex() **************
// The Array.findIndex( ) method returns the index of the FIRST MATCH array element that passes a test.
// If it does not pass the test, it returns -1

// let result = books.findIndex((book) => book.name.startsWith('L'));   // if there is a match, then returns index number of matching item
// console.log(result);

// let result2 = books.findIndex((book) => book.name.startsWith('T'));  // if there is no match then returns -1
// let output;
// if (result2 !== -1) {
//     output = books[result2];
// } else {
//     console.log('there is no such book in books array')
// }
// console.log(output);




