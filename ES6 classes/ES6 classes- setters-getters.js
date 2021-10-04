// ******************* ES6 Classes *********************++

// constructor function way

// function User(name, role) {
//   this.name = name;
//   this.role = role;
// }
// User.prototype.sayHi = function() {
//   console.log(`Hi, my name is ${this.name}`);
// }

// let jack = new User('jack', 'admin');
// console.log(jack);
// jack.sayHi();

// ***************** ES6 - Class way **************

// class UserCl {
//   constructor(name, role) {
//     // properties
//     this.name = name;
//     this.role = role;
//   }
//   // methods here
//   sayHi () {
//     console.log(`Hi, my name is ${this.name}`)
//   }
// }

// let mike = new UserCl('mike', 'user');
// console.log(mike);
// mike.sayHi();

// console.log(typeof UserCl); // function

// console.log(typeof mike);   // object

// console.log(mike instanceof UserCl); // true

// console.log(mike.__proto__ === UserCl.prototype);  // true


// class Person {
//     constructor(fName, lName, birthYear, city, country) {
//       this.fName = fName;
//       this.lName = lName;
//       this.birthYear = birthYear;
//       this.city = city;
//       this.country = country;
//     }

//     calcAge() {
//       this.age = 2021 - this.birthYear;
//     }
//     calcIsRetired() {
//       this.isRetired = this.age > 65 ? true : false;
//     }
// }

// // Sarah

// let sarah = new Person('sarah', 'smith', 1990, 'london', 'england');
// console.log(sarah);
// sarah.calcAge();
// sarah.calcIsRetired()
// console.log(sarah);

// class Auto {
//   constructor(brand, model, year, km, price) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.km = km;
//     this.price = price;
//   }
//   isGood() {
//     this.isGood = this.km < 100.000 ? true : false ;
//   }
//   needControl() {
//     this.needControl = this.km > 100.000 ? true :false ;
//   }
// }

// let bmw = new Auto('BMW', '3 Series', '2010', '110.000', '12.000 €');
// console.log(bmw);
// bmw.isGood();
// bmw.needControl();
// console.log(bmw);


// ************** getter - setter ***********

// class Product {

//   constructor(name, price, discount, inStock) {
//     this.name = name;
//     this.price = price;
//     this.discount = discount;
//     this.inStock = inStock;
//   }

//   // getters

//   get callPrice() {
//     return this.price;
//   }
//   get callDiscount() {
//     return this.discount;
//   }

//   // setters

//   set changePrice(newValue) {
//     this.price = newValue
//   }

//   set changeDiscount(newValue) {
//     this.discount = newValue
//   }
// }

// let prodX = new Product('Prod-X', 100, 0, true);
// console.log(prodX);
// console.log(prodX.callPrice);
// console.log(prodX.callDiscount)

// prodX.changePrice = 120;
// console.log(prodX.callPrice);
// console.log(prodX);