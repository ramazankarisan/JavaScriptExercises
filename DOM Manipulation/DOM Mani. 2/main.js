console.log('javascript is working');

//change the background of the body element
document.body.style.background = 'lightgreen';


// window object - global object: The global object provides variables and functions
// that are available anywhere

// window.alert('Hello!');

// let age = window.prompt(' how old r you?');
// console.log(age);

// const confirm = window.confirm('are you sure?') // boolean
// console.log(typeof confirm); // boolean
// console.log(confirm);

// // change the background color to blue 
// if (confirm('change background to blue')) {
//   document.body.style.background = 'blue';
// }

// console.log(window.outerWidth);
// console.log(window.innerWidth);
// console.log(window.outerHeight);
// console.log(window.innerHeight);
// console.log(window.location);
// console.log(window.frames);
// console.log(window.history);
// console.log(location);


// ********** DOM Manipulation ********
let elemSection = document.getElementById('main');
console.log(typeof elemSection);

elemSection.classList.add('red-text', 'center')
// elemSection.classList += ' big-text';
console.log(elemSection.classList);
elemSection.classList.remove('center')
console.log(elemSection.classList);

elemSection.innerText += ' Hello World!'

elemSection.innerHTML += ' <a href="https://www.google.de/"> google link</a>'

// ************ new div and manipulate it **********************
const div = document.querySelector('#content');
console.log(div);
// add a border
div.style.border = ' 1px solid blue';
// add padding for content div 
div.style.padding = ' 10px';
// font bold 
div.style.fontWeight = 'bold';

// add child to the content
// 1- first create element using createElement() 2- we add the elementto the appendChild()
const h3 = document.createElement('h3');
h3.innerText = 'Hello World!!!';
div.appendChild(h3);

// create an image and add it to the content div
// const img = document.createElement('img');
// // img.setAttribute('src', 'https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg');
// img.src = 'https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg'
// div.appendChild(img);


