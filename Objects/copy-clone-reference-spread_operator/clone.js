import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

let product1 = {
  category: 'shoe',
  colors: ['white', 'black', 'yellow'],
  price: {normal: 100, sale: 95, children: 90},
  delivery: ['germany', 'poland'],
  deliveryCost: { germany: 6, poland: 12 }
}

let product2 = cloneDeep(product1);
product2.deliveryCost.germany = 10;
product2.colors[1] = 'blue';

console.log(product1);
console.log(product2);