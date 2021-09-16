// ****************** Object Methods *****************

// console.log(this);


// let obj = {
//   a: 10,
//   b: 6,
//   calcDiff: function () {
//     this.diff = this.a - this.b;
//   }
// }
// obj.calcDiff();
// console.log(obj);


// CALL(), APPLY(), BIND() function methods with objects *************

// CALL() Method ******************************

// let user1 = {
//   name: 'user1',
// } 

// let user2 = {
//   name: 'user2',
// }

// let user3 = {
//   name: 'user3',
// }

// function calcAge (brtYear) {
//   this.age = 2021 - brtYear
// }

// calcAge.call(user1, 1980);
// console.log(user1);

// calcAge.call(user2, 2000);
// console.log(user2);

// calcAge.call(user3, 2010);
// console.log(user3);

// let users = [
//   {
//     name: 'user1',
//     birthYear: 1990
//   },
  
//   {
//     name: 'user2',
//     birthYear: 1950

//   },
  
//   {
//     name: 'user3',
//     birthYear: 1989

//   }

// ]

// function calcAge () {
//   this.age = 2021 - this.birthYear
// }
// for (let item of users) {
//   calcAge.call(item);
// }
// console.log(users);


// let students = [
//   {
//       name: 'std1',
//       course: 'HTML',
//       grades: [60, 75,85,90]
//   },
//   {
//     name: 'std2',
//     course: 'HTML',
//     grades: [60, 65, 95, 20, 80]
//   },
//   {
//     name: 'std3',
//     course: 'HTML',
//     grades: [30, 20, 55, 80]
//   }

// ]

// function average() {
//   let gradesTotal = 0;

//   for (let grade of this.grades) {
//     gradesTotal += grade
//     this.average = gradesTotal / this.grades.length 
//   }
  
// }

// for (let item of students) {
//   average.call(item)
//   isPassed.call(item)
// }
// console.log(students);


// function isPassed() {
//   this.average >= 50 ? this.isPassed = true : this.isPassed = false;
// }


//************ APPLY() Method *****************

// let products = [
//   {
//     name: 'prod1',
//     price: 100,
//     delivery: 10,
//     qnt: 50,
//   },
//   {
//     name: 'prod2',
//     price: 80,
//     delivery: 10,
//     qnt: 100,
//   },
//   {
//     name: 'prod3',
//     price: 70,
//     delivery: 10,
//     qnt: 80,
//   },
// ]

// function productInfo (soldQnt) {
//   this.soldQnt = soldQnt;
//   this.qnt -this.soldQnt <= 0 ? this.inStock = false : this.inStock = true
// }

// for (let item of products) {
//    productInfo.apply(item, [65])
// //  productInfo.call(item, 65)
// }
// console.log(products);

// **************** BIND() Method ************

// let people = [

//   {
//     name: 'person1',
//     gender: 'female',
//     birthYear: 1975
//   },
//   {
//     name: 'person2',
//     gender: 'male',
//     birthYear: 1955
//   },
//   {
//     name: 'person3',
//     gender: 'female',
//     birthYear: 1999
//   }
// ]

// // isRetired : female 60, male 65 ---> true, false

// function isRetired () {
//   this.age = 2021 - this.birthYear
//   this.gender == 'female' && this.age > 60 ? this.isRetired = true : this.isRetired = false;
//   this.gender == 'male' && this.age > 65 ? this.isRetired = true : this.isRetired = false;
// }
// for (let item of people){
//   let bindFunc = isRetired.bind(item)
//   bindFunc()
// }
// console.log(people);