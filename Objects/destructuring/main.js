// ***************** DESTRUCTURING ****************

// Array Destructuring
// Object Destructuring


// ************** Array Destructuring *****************

// let user = [ 'john', 'doe', 34, false, 'berlin', 'developer'];

// let [ firstName, lastName, age, isRetired, city, job] = user;

// console.log(firstName);
// console.log(job);


// with split() *********************************************************

// let john = 'John Smith in age 34 lives in Berlin as developer';

// let [firstName, lastName, , , age, , , city, , job, isRetired] = john.split(' ');

// console.log(firstName);
// console.log(age);
// console.log(job);
// console.log(isRetired);

// let student = ['Susie', ' JavaScript', [80, 90, 75,85]];

// let susie = {};

// susie.name = student[0];
// susie.course = student[1];
// susie.grades = student[2];
// console.log(susie);      // { name: 'Susie', course: ' JavaScript', grades: [ 80, 90, 75, 85 ] }

// [susie.name, susie.course, susie.grades] = student;

// console.log(susie);   // { name: 'Susie', course: ' JavaScript', grades: [ 80, 90, 75, 85 ] }

// susie.calcAver = function () {
//   let sum = 0;
//   for ( let item of this.grades) {
//     sum += item
//   }
//   this.average = sum / this.grades.length;
// }

// console.log(susie);
// susie.calcAver();
// console.log(susie);


// ...rest **************************************

// let numbers = [100, 500, 50, 60, 90, 40];

// let [item1, item2, item3, ...rest] = numbers;

// console.log(item1);
// console.log(item2);
// console.log(item3);
// console.log(...rest);

// let users = [
//   {name: 'mathilda',
//   age: 30},
//   {name: 'Jonas',
//   age:40},
//   {name: 'sarah',
//   age: 25}
// ]

// for (let {name, age} of users) {
//   console.log(name, age);
// }

//  ************* Object Destructuring *******************

// let fruit = {
//   title: 'apple',
//   image: 'image.jpg',
//   tag: 'fruit',
//   description: 'lorem ipsum',
//   price: 2.5

// }

// // let  {title: tl, image : img, tag: tg, description: des, price: pr} = fruit;

// // // console.log(title);
// // // console.log(image);
// // // console.log(tag);
// // // console.log(description);
// // console.log(price);

// let  {title: tl, image : img, tag: tg, description: des, price: pr, sale = 10} = fruit;

// console.log(tl);
// console.log(img);
// console.log(tg);
// console.log(des);
// console.log(pr);
// console.log(sale);



// let users = [
//  {
//   userName: 'john',
//   email: 'john@gmail.com',
//   role: 'admin'
//  },
//  {
//   userName: 'sarah',
//   email: 'sarah@gmail.com',
//   role: 'user'
//  },
//  {
//   userName: 'jonas',
//   email: 'jonas@gmail.com',
//   role: 'user'
//  },
//  {
//   userName: 'mario',
//   email: 'mario@gmail.com',
  
//  },
//  {
//   userName: 'jack',
//   email: 'jack@gmail.com',
  
//  }
// ]

// // function printUser ({userName, email, role = 'user'}) {
// // return `username is ${userName}, email is ${email}, role is ${role}`
// // }
// // for (let item of users) {
// //  console.log( printUser(item));
// // }

// function printUser ({userName: uN, email : em, role = 'user'}) {
//   return `username is ${uN}, email is ${em}, role is ${role}`
//   }
//   for (let item of users) {
//    console.log( printUser(item));
//   }

// problem with objects while declaration
// let john = {
  // name: 'john',
  // surname: 'Smith'
// }
// 
// let name, surname;
// 
// ({name, surname} = john);
// 
// console.log(name);
// console.log(surname);


// problem above stated doesn't exist with arrays
// let john =  [ 'john', 'Smith']


// let name, surname;

// [name, surname] = john;

// console.log(name)
// console.log(surname);;