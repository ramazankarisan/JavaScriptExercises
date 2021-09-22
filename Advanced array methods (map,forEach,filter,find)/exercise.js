/*🔥🔥🔥 CODING CHALLENGE - 1  🔥🔥🔥

1. Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
    Examples:
    doubleValues([1,2,3]) --> [2,4,6]
    doubleValues([5,1,2,3,10]) --> [10,2,4,6,20] */

// function doubleValues (array) {
//     let result = array.map(item => item * 2);
//     return result;
// };
// console.log(doubleValues([2, 5, 10, 60, 2]));


/* 2. Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
    Examples:
    onlyEvenValues([1,2,3]) -->  [2]
    onlyEvenValues([5,1,2,3,10]) -->  [2,10] */

// let onlyEvenValues = function (array) {
//     let result = array.filter(item => item % 2 === 0 );
//     return result;   
// }

// console.log(onlyEvenValues([5, 1, 2, 3, 10, 14]));

/* 3. Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string
    Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy'])  -->  ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) -->  ['hi', 'ge', 'se'] */

let showFirstAndLast = array => {
    let result = array.map(item => {
        let output =  item[0] + item[item.length - 1]
        return output;
    })
    return result;
}

console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));

/* 4. Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and then returns the array passed to the function with the new key and value added for each object
    Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') --> [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}] */



/* 5. Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so that both lowercase and uppercase letters should be counted
    Examples:
    vowelCount('Elie') -->  {e:2,i:1};
    vowelCount('Tim') -->  {i:1};
    vowelCount('Matt') -->  {a:1})
    vowelCount('hmmm') --> {};
    vowelCount('I Am awesome and so are you') --> {i: 1, a: 4, e: 3, o: 3, u: 1};



6. Write the function camelize(str) that changes dash-separated words like "my-short-string" into camel-cased "myShortString".
That is: removes all dashes, each word after dash becomes uppercased.
    Examples:
    console.log(camelize("background-color")) == 'backgroundColor';
    console.log(camelize("list-style-image")) == 'listStyleImage';
    console.log(camelize("-webkit-transition")) == 'webkitTransition';

7. Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a AND lower or equal to b. It returns a result as an array.
The function should not modify the array. It should return the new array.
    For instance:
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);

    console.log( filtered ); -->  [3,1] (matching values)
    console.log( arr ); --> [5,3,8,1] 



8. Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
    For instance:
    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4);      // removed the numbers except from 1 to 4
    console.log( arr ); -->   [3, 1] */