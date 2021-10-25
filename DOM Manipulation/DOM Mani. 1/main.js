// ********** Element.textContent *********************
// *********** with spacing, without inner html tags *********

// let elemP = document.querySelector('p.one');

// console.log(elemP.textContent);

// elemP.textContent = 'lorem ipsum set amet';
// elemP.textContent = 'lorem ipsum <b>set</b> amet';
// console.log(elemP.textContent);

// ********** Element.innerText *********************
// ********* without spacing and inner html tags **********

// let elemP = document.querySelector('p.one');
// console.log(elemP.innerText);

// elemP.innerText = 'lorem ipsum set amet';
// elemP.innerText = 'lorem ipsum <b>set</b> amet';

// ********** Element.innerHtml *********************
// ******** with spacing and inner HTML tags 

// let elemP = document.querySelector('p.one');
// console.log(elemP.innerHTML);

// elemP.innerHTML = 'lorem ipsum set amet';
// console.log(elemP.innerHTML);
// elemP.innerHTML = 'lorem ipsum <b> set </b> amet'
// console.log(elemP.innerHTML);

// let elemB = document.querySelector('p.one b');
// console.log(elemB);
// console.log(elemB.innerHTML);
// elemB.style.color = 'orange'

// ********** Element.attributes *********************

// let elemImg = document.querySelector('img');
// console.log(elemImg);
// console.log(elemImg.attributes); // {0: src, 1: alt, 2: width, src: src, alt: alt, width: width, length: 3}

// let elemAtt = Array.from(elemImg.attributes);
// console.log(elemAtt); // [src, alt, width]
// console.log(elemImg.width); // 400
// console.log(elemImg.getAttribute('width')); // 400

// elemAtt.forEach(item => console.log(item.nodeValue));


// ********** Element.setAttribute() *********************

// let elemImg = document.querySelector('img');

// console.log([...elemImg.attributes]); // [src, alt, width]
// console.log(elemImg.src); // img.jpg
// console.log(elemImg.width); // 400

// elemImg.setAttribute('src', 'img1.jpg');
// elemImg.setAttribute('width', '600');
// console.log(elemImg.src); // img1.jpg
// console.log(elemImg.width); // 600

// ********** Element.removeAttribute() *********************

// ********** Element.style.CSSProperty *********************

// let elemDiv = document.querySelector('div'); // first match
// console.log(elemDiv);

// elemDiv.style.color = 'red';
// elemDiv.style.background = 'lightblue';
// elemDiv.style.padding = '30px 50px';

// let elemsDiv = document.querySelectorAll('div');
// console.log(elemsDiv); // NodeList can run with forEach but HTML collection not

// // elemsDiv.forEach(item => {
// //   item.style.color = 'red';
// //   item.style.background = 'lightblue';
// //   item.style.padding = '30px 50px';
// //   item.style.marginBottom = '30px';

// // })

// elemsDiv.forEach(({ style: css }) => {
//   css.color = 'red';
//   css.background = 'lightblue';
//   css.padding = '30px 50px';
//   css.marginBottom = '30px';
// })


// ********** Element.classList *********************
// let elemDiv = document.querySelector('div.welcome');

// console.log(elemDiv);

// console.log(elemDiv.classList); // ['welcome', 'hide', value: 'welcome hide']

// elemDiv.classList.forEach(item => console.log(item));

// let user = 'ramazan';

// if (user) {
//   elemDiv.classList.remove('hide');
//   elemDiv.classList.add('show');
//   document.querySelector('p.user').innerHTML = `<b>${user}</b>`
//   console.log(elemDiv.classList);
// }

// let elemButton = document.querySelector('button');

// elemButton.addEventListener('click', () => {
//   elemButton.classList.toggle('green');
//   // elemButton.classList.toggle('green', true);
//   // elemButton.classList.toggle('green', false);
// })