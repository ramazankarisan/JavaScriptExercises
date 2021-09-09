// const myObject = {
//   name: 'ramazan',
//   surname: 'karisan',
//   email: 'info@gmail.com',
//   age: 26,
//   isWorking: false,

// }
// console.log(myObject);

// const mySecondObject = {
//   name: 'lionel',
//   surname: 'messi',
//   club: 'Paris Saint German',
//   age: 33,
//   isGoodPlayer: true
// }
// console.log(mySecondObject);

// mySecondObject.company = null;
// mySecondObject['email'] = 'a@gmail.com';
// console.log(mySecondObject);

// console.log('company' in mySecondObject);

// delete mySecondObject.company;
// console.log(mySecondObject);
// delete mySecondObject['email'];
// console.log(mySecondObject);



// let obj = {};

// let userSelection = 'orange';
// let amount = 1;

// // obj.userSelection = amount;
// // console.log(obj);

// obj[userSelection] = amount;
// console.log(obj);




// let person = {
//   name: 'John',
//   job: 'Developer',
//   sayHi: function () {
//     return `${this.name} says, Hi Guys`;
//   }
// }
// console.log(person);
// console.log(person.sayHi());



// let student = {
//   name: 'jonas',
//   course: 'JS',
//   grades: [90, 45, 60, 80, 100],
//   calcAver: function () {
//     let sum = 0;
//     for (i = 0; i < this.grades.length; i++) {
//       sum += this.grades[i];
//     }
//     let average = sum / this.grades.length;
//     this.aver = average;
//   }
// }

// console.log(student);
// // student.calcAver();
// student['calcAver']();
// console.log(student);


// let webDevClass = {
//   1: 'John',
//   2: 'Mike',
//   3: 'Jonas',
//   4: 'Mathilda',
//   '5': 'Sarah',
//   'main teacher': 'John Doe',
//   classList: function () {
//     return `these are the students in this class ${this['1']}, ${this['2']}, ${this['3']}, ${this['4']}, ${this['5']} with the teacher ${this['main teacher']}`
//   }
// }

// console.log(webDevClass);
// console.log(webDevClass['classList']());


// let user = {
//   email: 'joh.doe@gmail.com',
//   password: 'test123',
//   confirmPassword: 'test12',
//   verifyPass:
//   isLoggedIn:
// }

let john = {
  name: 'ramazan',
  city: 'berlin',
  job: 'developer',
  age: 26
}
// console.log(`hi my name is ${john.name} from ${john['city']} and ${john.age} years old, working as a ${john.job}`);



function checkName (objectName, keyName) {
  return keyName in objectName ? john[keyName] : `it does not exist`; 

}
console.log(checkName(john, 'job'));
console.log(checkName(john, 'company'));
