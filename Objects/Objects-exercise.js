// 1. Volume of a box. Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box. (Volume is length * width * height.)
//     Examples:
//     volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
//     volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
//     volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30


// function volumeOfBox (box) {
//   return box.width * box.length * box.height;
// }
// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));


// 2. Extract City Facts. Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
//     name
//     population
//     continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
//     Example:
//     cityFacts({ name: "Paris", population: "2,140,526", continent: "Europe" }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

// function cityFacts (city) {
//   return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`
// }
// console.log(cityFacts({ name: "Paris", population: "2,140,526", continent: "Europe" }));


// 3. Calculate the profit. You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.
//     Examples:
//     profit({ costPrice: 32.67, sellPrice: 45.00, inventory: 1200 }) ➞ 14796
//     profit({ costPrice: 225.89, sellPrice: 550.00, inventory: 100 }) ➞ 32411

// const profit = company =>  (Math.round(company.sellPrice - company.costPrice) * company.inventory)

// console.log(profit({ costPrice: 32.67, sellPrice: 45.00, inventory: 1200 }));


// 4. Does the Object Contain a Given Key? Write a function that returns true if a hash contains the specified key, and false otherwise.
//     Examples:
//     hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false
//     hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false
//     hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true

// const hasKey = (obj, key) =>  key in obj ? true : false ;
// console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
// console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));


// 5. International Greetings. Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.
//     const GUEST_LIST = {
//         Randy: "Germany",
//         Karla: "France",
//         Wendy: "Japan",
//         Norman: "England",
//         Sam: "Argentina"
//     }
// Write a function that takes in a name and returns a name tag, that should read: "Hi! I'm [name], and I'm from [country]." If the name is not in the object, return: "Hi! I'm a guest."
//     Examples:    
//     greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."
//     greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."
//     greeting("Monti") ➞ "Hi! I'm a guest."

// const guestList = {
//           Randy: "Germany",
//           Karla: "France",
//           Wendy: "Japan",
//           Norman: "England",
//           Sam: "Argentina"
//       }
// const greeting = key => key in guestList ? `Hi! I'm ${key} , and I'm from ${guestList[key]}.` : `Hi! I am a guest`;


// console.log(greeting('Randy'));
// console.log(greeting("Monti"));
// console.log(greeting("Sam"));