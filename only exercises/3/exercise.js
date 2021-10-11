/* 23. Create a class named Employee with two properties given person's first and last names.
    Add two methods fullname and email in the Employee class

    The method fullname returns by simply joining the first and last name together, separated by a space.
    The method email returns by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.

    Examples:
    emp1 = Employee("John", "Smith")
    emp1.fullname() ➞ "John Smith"

    emp2 = Employee("Mary",  "Sue")
    emp2.email() ➞ "mary.sue@company.com"

    emp3 = Employee("Antony", "Walker")
    emp3.firstname ➞ "Antony" */


// class Employee {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
//   email() {
//     return `${this.firstName}.${this.lastName}@company.com`.toLowerCase()
//   }
// }
// let emp1 = new Employee("John", "Smith");
// console.log(emp1.fullName());

// let emp2 = new Employee("Mary", "Sue")
// console.log(emp2.email());

// let emp3 = new Employee("Antony", "Walker")
// console.log(emp3.firstName);

/* 24. Fruit Smoothie. (Problem solving)
    Create a class Smoothie and do the following:
    - Create a constructor property called ingredients.
    - Create a getCost method which calculates the total cost of the ingredients used to make the smoothie.
    - Create a getPrice method which returns the number from getCost plus the number from getCost multiplied by 1.5. Round to two decimal places.
    - Create a getName method which gets the ingredients and puts them in alphabetical order into a nice descriptive sentence. If there are multiple ingredients, add the word "Fusion" to the end but otherwise, add "Smoothie". Remember to change "-berries" to "-berry". See the examples below.

    Ingredient	    Price
    Strawberries	$1.50
    Banana	        $0.50
    Mango	        $2.50
    Blueberries	    $1.00
    Raspberries	    $1.00
    Apple	        $1.75
    Pineapple	    $3.50

    Examples:
        s1 = new Smoothie(["Banana"])
        s1.ingredients ➞ ["Banana"]
        s1.getCost() ➞ "$0.50"
        s1.getPrice() ➞ "$1.25"
        s1.getName() ➞ "Banana Smoothie"

        s2 = new Smoothie(["Raspberries", "Strawberries", "Blueberries"])
        s2.ingredients ➞ ["Raspberries", "Strawberries", "Blueberries"]
        s2.getCost() ➞ "$3.50"
        s2.getPrice() ➞ "$8.75"
        s2.getName() ➞ "Blueberry Raspberry Strawberry Fusion" */

// class Smoothie {
//   constructor(ingredient) {
//     this.ingredient = ingredient;
//     this.cost = ingredient.reduce((total, item) => total + fruits1[item], 0)
//   }

//   getCost() {

//     return this.cost

//   }

//   getPrice() {
//     return this.cost + this.cost * 1.5
//   }

//   getName() {
//     if (this.ingredient.length == 1) {
//       return this.ingredient + " Smoothie"
//     } else {

//       return `${this.ingredient.map(ingredient => ingredient.replace("berries", "berry")).sort().join(" ")} Fusion`
//     }
//   }

// }



// let fruits1 = {
//   'Strawberries': 1.50,
//   Banana: 0.50,
//   Mango: 2.50,
//   Blueberries: 1.00,
//   Raspberries: 1.00,
//   Apple: 1.75,
//   Pineapple: 3.50,
// }

// let s1 = new Smoothie(["Banana"])
// console.log(s1);
// console.log(s1.getCost());
// console.log(s1.getPrice());
// console.log(s1.getName());


// let s2 = new Smoothie(["Raspberries", "Strawberries", "Blueberries"]);
// console.log(s2.ingredient);
// console.log(s2.getCost());
// console.log(s2.getPrice());
// console.log(s2.getName());


/* 25. Coffee Shop App
    Write a class called CoffeeShop, which has three instance variables:

        1. name : a string (basically, of the shop)
        2. menu : an array of items (of object type), with each item containing the item (name of the item), type (whether food or a drink) and price.
        3. orders : an empty array

    and seven methods:

    1. addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
    2. fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
    3. listOrders: returns the list of orders taken, otherwise, an empty array.
    4. dueAmount: returns the total amount due for the orders taken.
    5. cheapestItem: returns the name of the cheapest item on the menu.
    6. drinksOnly: returns only the item names of type drink from the menu.
    7. foodOnly: returns only the item names of type food from the menu.

    IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.
    NOTES:  Round off due amount up to two decimal places.

    Use these mock data:
        let shopName = "Tesha's coffee shop";
        let menu = [
            {item: 'orange juice', type: 'drink' , price: 1.50 },
            {item: 'lemonade', type: 'drink' , price: 1.25 },
            {item: 'cranberry juice', type: 'drink' , price: 1.75 },
            {item: 'pineapple juice', type: 'drink' , price: 2.50 },
            {item: 'lemon iced tea', type: 'drink' , price: 1.50 },
            {item: 'vanilla chai latte', type: 'drink' , price: 3.50 },
            {item: 'hot chocolate', type: 'drink' , price: 3.00 },
            {item: 'iced coffee', type: 'drink' , price: 1.75 },
            {item: 'tuna sandwich', type: 'food' , price: 3.75 },
            {item: 'ham and cheese sandwich', type: 'food' , price: 4.00 },
            {item: 'bacon and egg', type: 'food' , price: 4.25 },
            {item: 'hamburger', type: 'food' , price: 5.25 },
            {item: 'cinnamon roll', type: 'food' , price: 4.75 },
        ]
        let orders = [];

    Examples:
    // create new instance object
    let tcs = new CoffeeShop(shopName, menu, orders);

    tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
    // Tesha's coffee shop does not sell hot cocoa
    tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
    // specifying the variant of "iced tea" will help the process

    tcs.addOrder("cinnamon roll") ➞  "Order added!"
    tcs.addOrder("iced coffee") ➞ "Order added!"
    tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
    // the list of all the items in the current order

    tcs.dueAmount() ➞ 6.50

    tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
    tcs.fulfillOrder() ➞ "The iced coffee is ready!"
    tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
    // all orders have been presumably served

    tcs.listOrders() ➞ []
    // an empty array is returned if all orders have been exhausted

    tcs.dueAmount() ➞ 0.0
    // no new orders taken, expect a zero payable

    tcs.cheapestItem() ➞ "lemonade"
    tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
    tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"] */

// class CoffeeShop {
//   constructor(name, menu, orders) {
//     this.name = name;
//     this.menu = menu;
//     this.orders = orders;
//   }

//   addOrder(arg1) {
//     if (this.menu.some(param => param.item.includes(arg1))) {
//       this.orders.push(arg1);
//       return `Order added!`
//     } else {
//       return `This item is currently unavailable!`
//     }
//   }

//   displayer(some) {
//     return some
//   }
//   fulfillOrder() {

//     if (this.orders.length == 0) {
//       return "All orders have been fulfilled!"
//     } else {
//       let newArr = this.orders.splice(0, 1);
//       return `the ${newArr} is ready`

//     }
//   }

//   listOrders() {
//     return this.orders;
//   }

//   dueAmount() {
//     return (this.orders.reduce((total, param) => total + menu.find(i => i.item == param).price, 0)).toFixed(2)
//   }

//   cheapestItem() {
//     return this.menu.sort(((a, b) => {
//       if (a.price > b.price) {
//         return 1;
//       }
//       if (a.price < b.price) {
//         return -1;
//       }
//       return 0;
//     }))[0].item
//   }

//   drinksOnly() {
//     return this.menu.filter(elem => elem.type == 'drink').map(elem1 => elem1.item)
//   }

//   foodOnly() {
//     return this.menu.filter(elem => elem.type == 'food').map(elem1 => elem1.item)
//   }
// };
// let shopName = "Tesha's coffee shop";
// let menu = [
//   { item: 'orange juice', type: 'drink', price: 1.50 },
//   { item: 'lemonade', type: 'drink', price: 1.25 },
//   { item: 'cranberry juice', type: 'drink', price: 1.75 },
//   { item: 'pineapple juice', type: 'drink', price: 2.50 },
//   { item: 'lemon iced tea', type: 'drink', price: 1.50 },
//   { item: 'vanilla chai latte', type: 'drink', price: 3.50 },
//   { item: 'hot chocolate', type: 'drink', price: 3.00 },
//   { item: 'iced coffee', type: 'drink', price: 1.75 },
//   { item: 'tuna sandwich', type: 'food', price: 3.75 },
//   { item: 'ham and cheese sandwich', type: 'food', price: 4.00 },
//   { item: 'bacon and egg', type: 'food', price: 4.25 },
//   { item: 'hamburger', type: 'food', price: 5.25 },
//   { item: 'cinnamon roll', type: 'food', price: 4.75 },
// ]
// let orders = [];

// let tcs = new CoffeeShop(shopName, menu, orders);

// console.log(tcs.addOrder("hot cocoa"));
// console.log(tcs.addOrder("iced coffee"));
// console.log(tcs.addOrder("cinnamon roll"));
// console.log('----------');
// console.log(tcs.listOrders());
// console.log('----------');
// console.log(tcs.dueAmount());
// console.log('------------');
// console.log(tcs.fulfillOrder());
// console.log(tcs.fulfillOrder());
// console.log(tcs.fulfillOrder());
// console.log('-----------');
// console.log(tcs.listOrders());
// console.log(tcs.dueAmount());
// console.log('----------');
// console.log(tcs.cheapestItem());
// console.log(tcs.drinksOnly());
// console.log(tcs.foodOnly());