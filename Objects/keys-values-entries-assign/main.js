// *********** 1- for - in loops *************


//*********** first example */

// let user = {
//   email: 'johndoe@gmail.com',
//   password: 'test123',
//   role: 'user',
//   isAdmin: false,
// }

// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
//   console.log(`${key} : ${user[key]}`);
//   console.log('------------------');
// }

// ************ second example *********

// let myObject = {
//   name: 'ramazan',
//   surname: 'karisan',
//   age: 26,
//   city: 'berlin',
//   email: 'info@gmail.com'
// }

// for (let keyName in myObject) {
// console.log(keyName);
// console.log(myObject[keyName]);
// console.log(`${keyName} : ${myObject[keyName]}`);
// console.log('-------------');
// }

// Create a function takes an object. It will check all the keys and if the 'role' key exists, then change user role to 'co-admin'. Then the function will return the object.

// let user1 = {
//   email: 'john.doe@gmail.com',
//   password: 'test123',
//   role: 'user'
//   }

// let user2 = {
//   email: 'john.doe@gmail.com',
//   password: 'test123',
//   isAdmin: false
//   } 

// let makeCoAdmin = (object) => {
//   for (let key in object) {
//     if (key === 'role') {
//       object[key] = 'co-admin'
//     }
//   }
//   return object;
// }

// console.log(makeCoAdmin(user1));
// console.log(makeCoAdmin(user2));


// *********** 2- object keys *************
// *********** 3- object values *************

// let user2 = {
//     email: 'john.doe@gmail.com',
//     password: 'test123',
//     isAdmin: false
//     } 

// let userKeys = Object.keys(user2);
// console.log(userKeys);
// console.log(typeof userKeys);

// let userKeyValues = Object.values(user2);
// console.log(userKeyValues);

/* Write a function takes an object argument and returns the length of this object. 
Sample object :
let student = {
name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };
// getLength(student) --> 3
// */ 


// let myObject = {
//   name: 'ramazan',
//   surname: 'karisan',
//   age: 26,
//   city: 'berlin',
//   email: 'info@gmail.com'
// }

// let getLength = (objectName) => { 
//   let keyNames = Object.keys(objectName);
//   return keyNames.length
// }
 
// console.log(getLength(myObject));

// let student = {
//   name : "David Rayy",
//   sclass : "VI",
//   rollno : 12 
//   }

// console.log(getLength(student));


// Create a myCar object. Include the brand, model, color, year etc. 
// - Create a method to print data from the object e.g. "I have a 1969 red Ford Mustang".
// - Write another method to get the length of the myCar object. 

// let myCar = {
//   brand: 'bmw',
//   model: 'model 3',
//   color: 'red',
//   year: 2015,
//   carDetail: function () {
//     return `I have ${this.year} ${this.color} ${this.brand} ${this.model}`;
//   },
//   objectLength: function () {
//     return Object.keys(this).length;
//   }
// }

// console.log(myCar);
// console.log(myCar.carDetail());
// console.log(myCar.objectLength());



// *********** 4- object entries *************

// let product = {
//     name: 'Shoe in Black',
//     price: 145,
//     size: 38,
//     color: 'black',
//     inStock: true
// }

//  let objInArray = Object.entries(product);
// // console.log(objInArray);
// // console.log(objInArray.length);
// console.log(objInArray[3][1]);
// objInArray[3][1] = 'red';
// console.log(objInArray);
// console.log(product);


// *************** 5- Object.assign() - Merging the objects ****************+

// let student = {
//   name: ' John',
//   class: '4A',
//   course: 'JavaScript'
// }

// let grades = {
//   'first_test': 90,
//   'second_test': 70,
//   average: 0
// }

// let mergedData = Object.assign(student, grades);
// console.log(mergedData);