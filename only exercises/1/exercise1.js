/* 
1. Write a function that accept a list of country names as input and returns the longest country name as output.
    Example :
    Longest_Country_Name(["Australia", "Germany", "United States of America"]) -> output : "United States of America" */

// let Longest_Country_Name = item => {
//   let longestItem = "";
//     item.map(value => {
//     if(value.length > longestItem.length) {
//       longestItem = value;
//     }})
//     return longestItem  
  
// }
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));


/* 2. Write a function named countVowel, that accepts a string as a parameter and counts the number of vowels within the string. (including all lowercase and uppercase letters)
    Example :
    countVowel('The QUICK brown FOX') ->  output : 5 */

//    let countVowel = item => {
//     let vowels = "aeiou" 
//     total= 0;
//      item.toLowerCase().split("").map(item => {
//       if( vowels.includes(item)) {
//         total += 1
//       }})
//       return total;
//    }
    
// console.log(   countVowel('The I QUICK broown FOaX'));


/* 3. Write a function named reverseNum, that accepts a number as a parameter and reverse the number.
    Example :
    reverseNum(32243) -> output : 34223 */

    // let reverseNum = param => param.toString().split("").reverse().join("");
    // console.log(reverseNum(1235846));

/* 4. Write a JavaScript function named generateComb, that accepts a string as a parameter and generates all combinations of a string. 
    Example: 
    generateComb('dog') -> d,do,dog,o,og,g
    generateComb('four') -> f,fo,fou,four,o,ou,our,u,ur,r */

// let generateComb = param => {
//   let result = [];
//   for(let i = 0 ;i < param.length; i++)
//   {
//     for(let j = i + 1; j< param.length + 1; j++)
//     {
//         result.push(param.slice(i , j));
//     }
//   }
//   return result;
// }
// console.log(generateComb('dog'));


/* 5. Write a function named uppercase that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
    Example :
    uppercase('the quick brown fox') -> output : 'The Quick Brown Fox' */

// let uppercase = item => {
//   return item.split(" ").map(param => param[0].toUpperCase() + param.slice(1)).join(" ")
// }
// console.log(uppercase('the quick brown fox'));


/* 6. Write a function named findNums, which will take an array of numbers as argument and find the second lowest and second greatest numbers, respectively. Consider the repeating array elements.
    Example :
    findNums([1, 5, 3, 2, 4, 3, 5, 1]) -> output : 2,4 */

// let findNums = param => {
//   let newArr = [... new Set(param)].sort((a,b) => a - b)
//   return `${newArr[1]}, ${newArr[newArr.length-2]}`
// }
// console.log(findNums([1, 5, 3, 2, 4, 3, 5, 1]));


/* 7. Write a function named countChar that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
    Example :
    countChar('typescript', 't') -> output : 2 */

  //  let countChar = (param, letter) => {
  //   let result = 0;  
  //   param.split("").forEach(item => {
  //     if(item.includes(letter)) {
  //       result += 1;
  //     }})
  //   return result;
  // }
  //  console.log(countChar('typ ttt etsc  rtipt', 't'));

    

/* 8. Write a function named convertToArray that takes an object as an argument. It should return a nested array of key value pairs.
    Example :
    convertToArray({name: 'John', city: 'Berlin', job: 'Developer'}) -> output : [['name', 'John'], ['city', 'Berlin'], ['job', 'Developer]] */ 


// let convertToArray = obj => {
//   return Object.entries(obj)
// }

// console.log(convertToArray({name: 'John', city: 'Berlin', job: 'Developer'}));


/* 9. Write a function named amountTocoins that takes two argument (amount and coins array). It should convert the amount to coins. 
    Example :
    amountTocoins(46, [50, 20, 10, 5, 2, 1]) -> output : 20, 20, 5, 1 
    ( Here 46 is the amount. and 50, 20, 10, 5, 2, 1 are coins. ) */

    

/* 10. Write a function named uniqueChar that takes a string argument and extracts unique characters from this string.
    Example :
    uniqueChar("thequickbrownfoxjumpsoverthelazydog") -> output : "thequickbrownfxjmpsvlazydg" */

  //  let uniqueChar = str => {
  //    let newStr = [...new Set(str)].join("");
  //    return newStr;
  //  }
    
  //  console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

/* 11. Write a function named getRange that takes two number arguments and returns the integers in range of these two arguments as array.
    Example :
    getRange(2, 9) -> output : [3, 4, 5, 6, 7, 8] */ 

  //  let getRange = (num1, num2) => {
  //    let newArr = [];
  //    for (let i = 1; i < (num2 - num1); i++) {
  //      newArr.push(num1 + i)
  //    }
  //    return newArr;
  //  }
  //   console.log(getRange(2, 9));

/* 12. Create a function named manipulateArray that takes an array as an argument. Use array methods to manipulate the data the array below.
    The first two items in the array should switch positions. The third item should be replaced by an item containing "black".
    Return the changed array.
    Example :
    manipulateArray(["Red", "Green", "White"]) -> output : ["Green", "Red", "Black"] */

    // let manipulateArray = arr => arr.splice(0,2).reverse().concat("black")
    
    // console.log(manipulateArray(["Red", "Green", "White"]));