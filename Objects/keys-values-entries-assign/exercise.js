/*
🔥🔥🔥 CODING CHALLENGE - 2  🔥🔥🔥

1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object. */

// let person = {
//   name: 'ramazan',
//   surname: 'karisan',
//   age: 26,
//   city: 'berlin',
//   email: 'info@gmail.com'
// }

// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
//   console.log('-----------');
// }

/* 2. Get Values. Create a function that returns an array of all values of an object's properties.
    Example:
    getObjectValues({
        choice1: "tea",
        choice2: "coffee",
        choice3: "milk"
    })
    Expected output: ["tea", "coffee", "milk"] */

// let getObjectValues = (object) => {
//   let objectValues = Object.values(object);
//   return objectValues;
// }
// console.log(getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// }));

/* 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
    Example:
    let person = {
        firstName: "Michael",
        lastName: "Smith", 
        job: "driver",
        age: 20, 
        city: Paris
    }
    Expected Output: "Michael Smith is a 20 year old driver in Paris". */

// let person = {
//   firstName: "Michael",
//   lastName: "Smith", 
//   job: "driver",
//   age: 20, 
//   city: 'Paris'
//   summary: function() {
//     return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city}`
//   }
// }

// console.log(person.summary());



/* 4. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
    Examples:
    objectToArray({
        A: 1,
        B: 2,
        C: 3
    }) 
    Expected output: [["A", 1], ["B", 2], ["C", 3]]

    objectToArray({
    cats: 1,
    dogs: 2, 
    turtles: 4
    }) 
    Expected output: [["cats", 1], ["dogs", 2], ["turtles", 4]] */

// let objectToArray = (obj) => {
//   let array = Object.entries(obj);
//   return array;
// }
// console.log(objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }));

/*5. List Properties. Create a function that returns an array of properties of a javascript object.
    Example
    let student = {
        name: "Mike", 
        class: "4A" 
        course: "English"
    }
    Expected output: ["name", "class", "course"] */

    // let student = {
      // name: "Mike", 
      // class: "4A" ,
      // course: "English"
  // }
// 
  // let objectKeys = (obj) => {
    // let array = Object.keys(obj);
    // return array;
  // }
  // console.log(objectKeys(student));
  // 
/* 6. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
    Example
    let first = {firstName: "John"}
    let last = {lastName: "Smith"}

    Expected output: {firstName: "John", lastName: "Smith"}*/

// let first = {firstName: "John"}
// let last = {lastName: "Smith"}

// let mergeObject = (obj1, obj2) => {
//   return Object.assign(obj1, obj2)
// }
// console.log(mergeObject(first, last));

/* 7. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
    Examples:
    { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
    {key: true} ➞ [["key"], [true]] */

// let example = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// let objectDivide = (obj) => {
//   let keysAndValues = [];
//   keysAndValues.push(Object.keys(obj), Object.values(obj));
//   return keysAndValues;
// }

// console.log(objectDivide({ a: 1, b: 2, c: 3 }));

/*8. Create the following object:
    const student = { 
                        firstName: "John", 
                        lastName: "Smith", 
                        class: 12 
                    };
    
    Create a method that prints the following:  "John Smith is a student in class 12" */
// const student = { 
//   firstName: "John", 
//   lastName: "Smith", 
//   class: 12,
//   sumInfo: function () {
//     return `${this.firstName} ${this.lastName} is a student in class ${this.class}`
//   }
// };

// console.log(student.sumInfo());


/* 9. Create a person object. Include the person's first and last name, age, job, city etc. 
    - Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
    - Write another method to get the length of the person object.
     */

// let person = {
//   name: 'ramazan',
//   surname: 'karisan', 
//   age: 26,
//   city: 'berlin',
//   job: 'developer',
//   info: function () {
//     return `${this.name} ${this.surname} is a ${this.age} years old ${this.job} living in ${this.city}`
//   },
//   length: function () {
//     return Object.keys(this).length
//   }
// };

// console.log(person.info());
// console.log(person.length());


/*10. Let's calculate BMI index for Mark and John. 
    - For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
    - Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
    - Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's BMI (23.9)!"

    TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

    ( BMI =  mass / (height * height). (mass in kg and height in meter) )
*/

let person1 = {
  fullname: 'Mark Miller',
  mass: 80,
  height: 1.80,
  calcBMI: function () {
    let bmi = (this.mass / (this.height**2)).toFixed(2)
    this.bmi = bmi
    return bmi 
  }
}

let person2 = {
  fullname: 'John Smith',
  mass: 90,
  height: 1.82,
  calcBMI: function () {
    let bmi = (this.mass / (this.height**2)).toFixed(2)
    this.bmi = bmi
    return bmi 
  }
}

person1.calcBMI()
console.log(person1);

person2.calcBMI()
console.log(person2);

console.log(person1['bmi'] > person2['bmi'] ? `Mark Miller's BMI (${person1.bmi}) is higher than John Smith's BMI (${person2.bmi})` : `John Smith's BMI (${person2.bmi}) is higher than Mark Miller's BMI (${person1.bmi})`);