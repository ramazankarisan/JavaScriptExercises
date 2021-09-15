/* EXERCISE :

1. Array Destructuring. Declare the variables fruit, vegetable, food. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). Use array destructuring assignment to complete this task. */

// let fruit = ['banana'];
// let [item1] = fruit;
// console.log(item1);

// let vegetable = ['cucumber'];
// let [vegetable1] = vegetable;
// console.log(vegetable1);

// let food = ['bread', 'cakes', 'pizza'];
// let [food1, food2, food3] = food;
// console.log(food2);


/* 2.Object Destructuring. Create an object which contains key pair values of names and the respective halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values. */

// const costumes = {
//   fran: 'witch',
//   john: 'dracula',
//   mathias: 'freddy'
// }

// let { fran, john, mathias} = costumes;
// console.log(fran);
// console.log(john);

/* 3. Parameters: Object Destructuring. Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
Then, create a function to display all of the band/musician's data.
Example:
`Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`. */

// let musicInfo = {
//   musician: 'regina spektor',
//   hit: 'us',
//   nationality: 'american-russian',
//   genre: 'indie-pop' 
// }

// // let {musician, hit, nationality, genre} = musicInfo;

// function info ({musician, hit, nationality, genre}) {

//   console.log(`${musician} is a ${nationality} singer and pianist. the musician sings ${genre} and their greatest hit is '${hit}'`);
// }

// info(musicInfo);


/* 4. Write a function takes an object as argument to display the reading status (i.e. display book name, author name and reading status) of the following books.*/
    // let library = [ 
    //     {
    //         title: 'The Road Ahead',
    //         author: 'Bill Gates',
    //         readingStatus: true
    //     },
    //     {
    //         title: 'Steve Jobs',
    //         author: 'Walter Isaacson',
    //         readingStatus: true
    //     },
    //     {
    //         title: 'Mockingjay: The Final Book of The Hunger Games',
    //         author: 'Suzanne Collins',
    //         readingStatus: false
    // }];
/* If the readingStatus is true, it returns such like string "Already read 'The Road Ahead' by Bill Gates." , otherwise "You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins." */

// function readingStatus ({title, author, readingStatus}) {
// readingStatus == true ? console.log(`already read '${title}' by ${author}`) : console.log(`you still nedd to read ${title} by ${author}`);
// }

// for (let item of library) {
// readingStatus(item);
// }


/* 5. Calculate the Total Price of Groceries. Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
    {"product": "Milk", "quantity": 1, "price": 1.50 }

        Examples :
        getTotalPrice([ { product: "Milk", quantity: 1, price: 1.50 } ]) ➞ 1.5
        getTotalPrice([ { product: "Milk", quantity: 2, price: 1.50 }, { product: "Cereals", quantity: 3, price: 2.50 }]) ➞ 10.50 */


// function getTotalPrice (arr) {
//   let sum = 0; 

//   for (let items of arr) {
//     sumUp(items)
//   };

//   function sumUp ({quantity, price}) {
//     sum += quantity * price
//   };

//   console.log(sum);

// }

// getTotalPrice([ { product: "Milk", quantity: 2, price: 1.50 }, { product: "Cereals", quantity: 3, price: 2.50 }]);



