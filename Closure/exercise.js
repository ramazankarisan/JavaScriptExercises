/* 🔥🔥🔥 CODING CHALLENGE - 1  🔥🔥🔥

1- In your own words, define closure (1-2 sentences). */

// able to create and use an inner function inside of an outer function

/* 2- Study the following code, then answer the questions below.*/


    // function personalDice(name){
    
    //     return function(){
    //         // It generates random number between 1 and 6
    //         const newRoll = Math.floor(Math.random() * 6);

    //         console.log(`${name} rolled a ${newRoll}`)
    //     }
    // }

    // const dansRoll = personalDice("Dan");
    // const zoesRoll = personalDice("Zoe");

    // dansRoll();
    // dansRoll();

    // zoesRoll();     
    // zoesRoll();    
    
    /* a. Where is closure used in this code? How can you tell?

    inside of personalDice() function, there is an inner function. when the "dansroll" is defined, it becomes a new inner function and work properly.#

    b. Compare and contrast calling dansRoll the first and second time. What is always the same? What could change?
    
    every time that function invokes, it repeats the all procedure from beginning till the end and then it ends itself. for the second time all the things cycles itself.

    c. What is the lexical scope of newRoll?

    inner lexical scope is [[Environment]] and dansRoll or zoesRoll
    outer lexical scope is personalDice(). When the personalDice() is invokes, inner function is created.

    */

/* 3- Write a function that would allow you to do this using a closure.

    var addSix = createBase(6);
    addSix(10);     // returns 16
    addSix(21);     // returns 27 */


  // function createBase(num1) {
  //   return function(num2) {
  //     console.log(num1 + num2);
  //   }
  // }
  // var addSix = createBase(6);
  // addSix(10);     // returns 16
  // addSix(21);     // returns 27 

/* 🔥🔥🔥 CODING CHALLENGE - 2 - Scoping exercises 🔥🔥🔥

/* 1- What's the result of executing this code and why. */

    // function test() {
    //     console.log(a);
    //     console.log(foo());
        
    //     var a = 1;
    //     function foo() {
    //         return 2;
    //     }
    // }
    // test();  // undefined and 2 
    // // variable a should be written before console.log(a)



/* 2- What is result? */

//     var a = 1; 

//     function someFunction(number) {
    
    
//         function otherFunction(input) {
//             return a;
//         }
        
//         a = 5;

        
//         return otherFunction;
//     }

//     var firstResult = someFunction(9);
//     var result = firstResult(2);
  
// console.log(result);

/* 3- What is the result of the following code? Explain your answer. */

    // var fullname = 'John Doe';
    // var obj = {
    //     fullname: 'Colin Ihrig',
    //     prop: {
    //         fullname: 'Aurelio De Rosa',
    //         getFullname: function() {
    //             return this.fullname;
    //         }
    //     }
    // };

    // console.log(obj.prop.getFullname()); //Aurelio De Rosa

    // var test = obj.prop.getFullname;

    
    // console.log(test());   // undefined



/* 4- What will you see in the console for the following example? */

    // var a = 1; 
    // function b() { 
    //     a = 10; 
    //     return; 
    //     function a() {} 
    // } 
    // b(); 
    // console.log(a); 

