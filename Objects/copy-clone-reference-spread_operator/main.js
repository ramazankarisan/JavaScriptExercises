//**************** Clones & Reference Copy******* */

// copying primitives

// let johnComp = 'DCI';
// let mikeComp = johnComp;

// mikeComp = 'CGI';

// console.log(mikeComp);  // CGI
// console.log(johnComp);  // DCI

// // copying objects, arrays 

// let john = {
//   name: 'john',
//   city: 'berlin'
// }

// let jonas = john;
// jonas.name = 'jonas';

// console.log(john);    // { name: 'jonas', city: 'berlin' }
// console.log(jonas);   // { name: 'jonas', city: 'berlin' }

// // arrays

// let students1 = ['john', 'mike', 'sarah' ];
// let students2 = students1;

// students2[0] = 'mathilda';
// console.log(students1);   // [ 'mathilda', 'mike', 'sarah' ]
// console.log(students2);   // [ 'mathilda', 'mike', 'sarah' ]

// console.log(students1 == students2);    // true
// console.log(students1 === students2);   // true  same reference number


// // comparison problem

// let num1 = [1, 2, 3, 4, 5];
// let num2 = [1, 2, 3, 4, 5];

// console.log(num1 == num2);    // false  different reference number
// console.log(num1 === num2);   // false


// for arrays and objects in order to solve this reference problem there are 2 copy ways: 1) Shallow Copy 2) Deep Copy
// deep copy for objects that contains nested object data types


// Shallow Copy option-1 Spread Operator  option-2 Object.assign()

// **************** Spread operator **************************

// let student1 = {
//   name: 'mike',
//   class: '4b',
//   course: 'JavaScript',
//   city: 'düsseldorf'
// }

// // let student2 = {...student1};
// // student2.name = 'sarah';
// // student2.grade = 95;

// // console.log(student1);
// // console.log(student2);
// // console.log(student1 == student2);  // false

// // ******************** Object.assign() option *************************
// let student2 = Object.assign({}, student1);
// student2.name = 'Sarah';

// console.log(student1);
// console.log(student2); 

//Spread operators in Objects

// let user = {
//   email: 'johdoe@gmai.com',
//   password: 'test134',
//   role: 'user',
//   isLoggedIn: true
// }

// user = {...user, isLoggedIn: false}

// console.log(user);

// REST OPERATOR

// let numbers = [100, 500, 400, 300, 900];

// let [ num1, num2, ...rest] = numbers;

// console.log(num1);
// console.log(num2);
// console.log(rest);
// console.log(numbers);