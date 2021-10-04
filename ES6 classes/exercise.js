 /* 🔥🔥🔥 EXERCISE - 2 🔥🔥🔥 */

    /* 1. Person Class.
        Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old". */ 

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   describe() {
//     return `${this.name}, ${this.age} years old`
//   }
// }
// let john = new Person('john', 19);
// console.log(john);
// console.log(john.describe());


    /* 2. Volume.
        Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.

        Note: Volume of a cylinder : V = πr^2h - r is the radius and h is the height of the cylinder. */

// class Cylinder {
//   constructor(radius, height) {
//     this.radius = radius;
//     this.height = height;
//   }

//   volumeCylinder() {
//     return this.valume = (Math.PI * (this.radius ** 2) * this.height).toFixed(2);
//   }
// }

// let cylinder = new Cylinder(2.4, 3);
// console.log(cylinder);
// console.log(cylinder.volumeCylinder());

    /* 3. Create a TV class with properties like brand, channel and volume.
        Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.

        Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
        Add a method to set the channel randomly. Let's say the TV has only 50 channels.
        Add a method to reset TV so it goes back to channel 1 and volume 50.
        It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75". */

// class TV {
//   constructor(brand = 'samsung', channel = 1, volume = 50) {
//     this.brand = brand;
//     this.channel = channel;
//     this.volume = volume;
//   }

//   changeVolume(value) {
//     return value >=0 && value <= 100 ? this.volume = value : this.volume = `please enter a number between 0-100`;
//   }
//   randomChannel() {
//     return this.channel = Math.floor(Math.random() * 51)
//   }
//   resetTv() {
//     this.channel = 1;
//     this.volume = 50;
//   }
//   get status() {
//     return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
//   }
// }
// let tvProg = new TV();
// console.log(tvProg);
// console.log(`-----------`);

// tvProg.changeVolume(30)
// console.log(tvProg);
// console.log(`-----------`);

// tvProg.randomChannel();
// console.log(tvProg);
// console.log(`-----------`);

// tvProg.resetTv();
// console.log(tvProg);

// console.log(tvProg.status);

    /* 4. Create methods for the Calculator class that can do the following:

        Add two numbers.
        Subtract two numbers.
        Multiply two numbers.
        Divide two numbers.

        example:
            var calculator = new Calculator()
            calculator.add(10, 5) ➞ 15
            calculator.subtract(10, 5) ➞ 5
            calculator.multiply(10, 5) ➞ 50
            calculator.divide(10, 5) ➞ 2 */

// class Calculator{
//   constructor() {

//   }
//   add(num1, num2) {
//     return num1 + num2;
//   }
//   subtract(num1, num2) {
//     return num1 - num2;
//   }
//   multiply(num1, num2) {
//     return num1 * num2;
//   }
//   divide(num1, num2) {
//     return num1 / num2
//   }
// }
// var calculator = new Calculator()
// console.log(calculator.add(10, 5));
// console.log(calculator.subtract(10, 5));
// console.log(calculator.multiply(10, 5));
// console.log(calculator.divide(10, 5));

    /* 5. Write a class called Rectangle that represents a rectangular two-dimensional region. 
        It constructs a new rectangle whose top-left corner is specified by the given coordinates and with the given width and height.
        It should have the following properties:
        x, y, width, height
        It should have the following methods:
        toString()
        It returns a string representation of this rectangle, as [x=1, y=2, width=3, height=4].

        example:
            let rect1 = new Rectangle(1, 2, 10, 5)
            rect1.toString() -> [x=1, y=2, width=10, height=5] */

    // class Rectangle{
    //   constructor(x, y, width, height) {
    //     this.x = x;
    //     this.y = y,
    //     this.width = width;
    //     this.height = height;
    //   }
    //   toString() {
    //      let array = [];
    //     for (const [key, value] of Object.entries(this)) {
    //       array.push(`${key} = ${value}`)
    //     }
    //     return array;
    //   }
    // }
    // let rect1 = new Rectangle(1, 2, 10, 5)
    // console.log(rect1);
    // console.log(rect1.toString());



// 🔥🔥🔥 CODING CHALLENGE - 6 🔥🔥🔥

/* Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console. */

const parks = [
  {
      name: 'Green Park',
      buildYear: 1987,
      area: 0.2,
      numTrees: 215
  },
  {
      name: 'National Park',
      buildYear: 1894,
      area: 2.9,
      numTrees: 3541
  },
  {
      name: 'Oak Park',
      buildYear: 1853,
      area: 0.4,
      numTrees: 949
  }
]

const streets = [
  {
      name: 'Ocean Avenue',
      buildYear: 1999,
      length: 1.1,
      size: 4
  },
  {
      name: 'Evergreen Street',
      buildYear: 2008,
      length: 2.7,
      size: 2
  },
  {
      name: '4th Street',
      buildYear: 2015,
      length: 0.8
  },
  {
      name: 'Sunset Boulevard',
      buildYear: 1982,
      length: 2.5,
      size: 5
  }
];

class Parks {
  constructor(name, buildYear, area, numTrees) {
    this.name = name;
    this.buildYear = buildYear;
    this.area = area;
    this.numTrees = numTrees;
  }
  density() {
    return this.numTrees / this.area;
  }
  age() {
    return this.age = 2021 - this.buildYear
  }


}
class Streets{
  constructor(name, buildYear, length, size) {
    this.name = name;
    this.buildYear = buildYear;
    this.length = length;
    this.size = size;
  }
  classification() {
    if(this.size <= 5 && this.size > 4) {
      return this.sizeClass = 'huge'
    }else if (this.size <= 4 && this.size > 3) {
      return this.sizeClass = 'big'
    }else if (this.size <= 3 && this.size > 2 || this.size == undefined) {
      return this.sizeClass = 'normal'
    }else if (this.size <= 2 && this.size > 1) {
      return this.sizeClass = 'small'
    }else {
      return this.sizeClass = 'tiny'
    }
  }
}
let streetsNew = streets.map(item =>new Streets(...Object.values(item))) ;
console.log('------- Streets ------------------');
console.log(streetsNew);

let parksNew = parks.map(item => new Parks (...Object.values(item)))
console.log('------- Parks ------------------');
console.log(parksNew);

// 1. Tree density of each park in the town (forumla: number of trees/park area)

console.log('---------- 1 ----------');
console.log(parksNew.map(item => item.density())
);

// 2. Average age of each town's park (forumla: sum of all ages/number of parks)

console.log('----------- 2 -------------');
parksNew.map(item => item.age());
console.log(parksNew.reduce((total,item) => total + item.age, 0) / parksNew.length
);

// 3. The name of the park that has more than 1000 trees

console.log('----------- 3 --------------');
console.log(parksNew.filter(item => item.numTrees > 1000).map(item => `${item.name}`)
);

// 4. Total and average length of the town's streets

console.log('------------ 4 ----------');
console.log(streetsNew.reduce((total,item) => total + item.length, 0)
);
console.log(streetsNew.reduce((total, item) =>  total + item.length, 0) / streetsNew.length);

// 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

console.log('--------- 5 ----------');
streetsNew.map(item => item.classification());

console.log(streetsNew);