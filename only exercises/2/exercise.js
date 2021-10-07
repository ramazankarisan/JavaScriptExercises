/* 13. Write a function named addDash that accepts a number as argument and insert dashes (-) between each two even numbers.
    Example :
    addDash(254680) -> output : 254-6-8-0
    addDash(1572453) -> output : 1572-453  */

//   let addDash = param => {
//     return param.toString().split("").map((item, index, array) => {
//      if(item % 2 == 0 && array[index + 1] % 2 == 0 ){
//         return item.replace(item,item + "-")
//      }else{
//        return item;
//      }
//    }).join("");

//  }

//  console.log(addDash(254680));
//  console.log(addDash(1572453));

/* 14. Write a function named freqElem that takes an array as an argument and finds the most frequent item of that array.
    Example :
    freqElem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]) -> output : "a, 5 times" */



/*15. Write a function named changeCase that takes two arguments, first a string, second a callback function.
Callback function swaps the case of each character.
    Example :
    changeCase('The Quick Brown Fox', callback) -> output : 'tHE qUICK bROWN fOX' */


// let change = item => item == item.toLowerCase() ? item.toUpperCase() : item.toLowerCase();

// let changeCase = (param, callback) => param.split("").map(item => callback(item)).join("");

// console.log(changeCase('The Quick Brown Fox', change));

/* 16. Write a function to sort the following array of objects by title value.
    var library = [
                    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
                    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
                    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
                  ];*/

// var library = [
//   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
// ];

// function sortLibrary(param) {
//   return param.sort((a, b) => {

//     if (a.title < b.title) {
//       return -1;
//     }
//     if (a.title > b.title) {
//       return 1;
//     }
//     return 0;
//   });
// }

// console.log(sortLibrary(library));




/* 17. Create a function named createObject that takes two arrays as arguments. First array dishes should contain dish names,  and
second array calories should contain calorie values of dishes respectively.
Convert given arrays into object, with key value pairs using the Array method "reduce" and return the object as the result of your function.

let dishes = ['Hamburger', 'Cheeseburger', 'Filet-O-fish', 'McChicken', 'Big_Mac', 'McNuggets'];
let calories = ['253 kcal', '302 kcal', '331 kcal', '384 kcal', '503 kcal', '268 kcal'];

Expected output : {
    Hamburger: '253 kcal',
    Cheeseburger: '302 kcal',
    Filet-O-fish: '331 kcal',
    McChicken: '384 kcal',
    Big_Mac: '503 kcal',
    McNuggets: '268 kcal'
}
*/
// let dishes = ['Hamburger', 'Cheeseburger', 'Filet-O-fish', 'McChicken', 'Big_Mac', 'McNuggets'];
// let calories = ['253 kcal', '302 kcal', '331 kcal', '384 kcal', '503 kcal', '268 kcal'];

// let createObject = (arr1, arr2) => arr1.reduce((total, item, index) => ({...total, [item]: arr2[index]}), {})

// console.log(createObject(dishes, calories));

/* 18. Write a JavaScript function named checkKey that takes two arguments, first an object, second a key property name. It will check whether an object contains given property.
    Example:
    hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF", blue: "#0000FF"}, "green") --> output : true
    hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF", blue: "#0000FF"}, "black") --> output : false */



// let hasKey = (obj, key) => Object.keys(obj).includes(key);
// console.log(hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF", blue: "#0000FF"}, "black"));
// console.log(hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF", blue: "#0000FF"}, "green"));


/*19. Create a function named createCountry that takes an array of words as an argument and a string as a word suffix.
Use an array method, to add the suffix to the end of all words. It will return an array, and do not use loop to complete this task.
    Example:
    createCountry(['Fin', 'Ice', 'Thai', 'Po', 'Switzer'], 'land') --> output : ['Finland', 'Iceland', 'Thailand', 'Poland', 'Switzerland'] */

// let createCountry = (arr, str) => arr.map(item => item+str);

// console.log(createCountry(['Fin', 'Ice', 'Thai', 'Po', 'Switzer'], 'land'));

/* 20. Create a function named arrayOfMultiples that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
    Example:
    arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
    arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
    arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102] */


// let arrayOfMultiples = (num1, rep) => {
//   let newArr = []; 
//   for(let i = 0; i < rep; i++) {
//     newArr.push(num1 + (num1 * i))
//   }
//   return newArr;
// }

// console.log(arrayOfMultiples(7, 5));
// console.log(arrayOfMultiples(17, 6));

/* 21. Create a function named getTotalPrice that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price.

    let groceries = [
        { product: "Milk", quantity: 1, price: 1.50 },
        { product: "Eggs", quantity: 12, price: 0.10 },
        { product: "Bread", quantity: 2, price: 1.60 },
        { product: "Cheese", quantity: 1, price: 4.50 },
        { product: "Chocolate", quantity: 1, price: 0.10 },
        { product: "Lollipop", quantity: 1, price: 0.20 }
    ];

    expected output : 10.7  */


// let groceries = [
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 },
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ];
// let getTotalPrice = arr => arr.reduce((total, item) => total + (item.quantity * item.price), 0);

// console.log(getTotalPrice(groceries));

/* 22. Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
    Example:
    insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"
    insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"
    insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History" */

// let insertWhitespace = param => {
//   return param.split("").map((item, index) => {
//     if (item == item.toUpperCase() && index != 0) {
//       return item.replace(item, " " + item)
//     } else {
//       return item;
//     }
//   }).join("");
// }

// console.log(insertWhitespace("SheWalksToTheBeach"));
// console.log(insertWhitespace("TheGreatestUpsetInHistory"));
// console.log(insertWhitespace("MarvinTalksTooMuch"));