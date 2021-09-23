// ******************* Closure *****************+

// • A CLOSURE is a function that remembers its outer variables and can access them.
// • A CLOSURE is a function having access to the parent scope, even after the parent function has closed.
// • A CLOSURE is a function that contains at least one variable and one nested function scope.

// function makeCounter() {
//   let count = 0;

//   return function () {
//     count += 1
//     return count;
//   };
// }

// let counter = makeCounter()

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function greeting(message) {
  
//   return function (name) {
//     return `${message} ${name}`;
//   } 
// }

// let sayHi = greeting('Hi,');

// console.log(sayHi('john'));   // Hi, john
// console.log(sayHi('Mike'));   // Hi, Mike

// let sayHello = greeting('Hello,');
// console.log(sayHello('mathilda'));    // Hello, mathilda


const cartMaker = function () {
  
  let cartItems = [];

  function addItem (item) {
    cartItems.push(item);
    return `${item} added into the cart...!`;
  }

  function getCartLength() {

    return cartItems.length === 0 ? `there is no item in your cart` : cartItems.length === 1 ? 'there is 1 item in your cart' :  `there are ${cartItems.length} items in your cart`
        
  };

  function deleteItem(ID) {
    let filteredArr = cartItems.filter(obj => obj.id !== ID);
    
    cartItems.splice(0, cartItems.length, ...filteredArr);
    }

  return {
    deleteItem,
    cartItems,
    addItem,
    getCartLength
  }

}

let cart = cartMaker();
console.log(cart);

// cart.addItem('Book');
// cart.addItem('Bag');
// cart.addItem('Notebook');

console.log(cart.cartItems);
console.log(cart.getCartLength());

cart.addItem({id: 1, name: 'Book', price: 12, inSale: true});
cart.addItem({id: 2, name: 'Bag', price: 55, inSale: true});
cart.addItem({id: 3, name: 'Noteoook', price: 300, inSale: false});
cart.addItem({id: 4, name: 'Monitor', price: 122, inSale: false});

console.log(cart);
console.log(cart.getCartLength());

cart.deleteItem(3);
console.log(cart.cartItems);



