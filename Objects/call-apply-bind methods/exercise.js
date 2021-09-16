 /* CODING CHALLENGE - 1 */
    
    // let people = [
    //     {
    //         id: 1,
    //         name: 'Mike',
    //         job: 'Developer',
    //         gender: 'male',
    //         birthYear: 1980,
    //     },
    //     {
    //         id: 2,
    //         name: 'Joe',
    //         job: 'Developer',
    //         gender: 'male',
    //         birthYear: 1970,
    //     },
    //     {
    //         id: 3,
    //         name: 'Sarah',
    //         job: 'Developer',
    //         gender: 'female',
    //         birthYear: 1990,
    //     },
    //     {
    //         id: 4,
    //         name: 'Jonas',
    //         job: 'Developer',
    //         gender: 'male',
    //         birthYear: 1950,
    //     },
    //     {
    //         id: 5,
    //         name: 'Matilda',
    //         job: 'Developer',
    //         gender: 'female',
    //         birthYear: 1985,
    //     },
    // ];
    
/*
    use call(), apply() or bind() 
    1. create a function that calculates the age and assign it key age. It takes birth year as an argument.

    2. create another function that calculates how many years more to get retired. (male 65, female 60)
        It will assign true, if already got retired; otherwise false to key isRetired

    3. create another function to print console every one's data e.g 'Mike is 41 years old, and developer. He/She got retired/needs to work more' */

// for (let item of people) {
//   ageFinder.call(item);
//   isRetired.call(item);
//   console.log(printInfo.call(item));
//   console.log(item);
// }
// function ageFinder() {
//   this.age = 2021 - this.birthYear // in order to find age and assign it
// }
// function isRetired () {
//   this.gender == 'female' && this.age > 60 ? this.isRetired = true : this.isRetired = false;
//   this.gender == 'male' && this.age > 65 ? this.isRetired = true : this.isRetired = false;

// }
// function printInfo () {
//   if (this.gender == 'female' && this.isRetired == true){
//     console.log(`she got retired`);
//   } else if (this.gender == 'female' && this.isRetired == false) {
//     console.log(`she needs to work more`);
//   } else if (this.gender == 'male' && this.isRetired == true) {
//     console.log(`he got retired`);
//   } else {
//     console.log(`he needs to work more`);
//   }
//    return `${this.name} is ${this.age} years old and ${this.job}.`
// }

 /* CODING CHALLENGE - 2  */
                
    let products = [
        {
            id: 1,
            title: "prod-1",
            price: 300,
            discount: 10,
            weekSoldItems: [5, 3, 5, 5, 4, 5],
        },
        {
            id: 2,
            title: "prod-2",
            price: 400,
            discount: 10,
            weekSoldItems: [3, 2, 4, 2, 3, 2],
        },
        {
            id: 3,
            title: "prod-3",
            price: 150,
            discount: 6,
            weekSoldItems: [5, 6, 4, 4, 6, 5],
        },
        {
            id: 4,
            title: "prod-4",
            price: 100,
            discount: 5,
            weekSoldItems: [10, 6, 8, 5, 5, 4],
        },
        {
            id: 5,
            title: "prod-5",
            price: 50,
            discount: 0,
            weekSoldItems: [10, 15, 8, 12, 5, 8],
        },
    ];


   /* 1. Create a function that calculates last price of each object and saves it to key "lastPrice" of relevant object. (lastPrice = (price - (price * discount)/100)
    If there is no discount (0), then lastPrice is the normal price. */

    // for (let item of products) {
    //   lastPrice.call(item)
    //   console.log(item);
    // }
    function lastPrice () {
      this.discount == 0 ? this.lastPrice = this.price : this.lastPrice = this.price - (this.price * this.discount / 100);
    }

    /* 2. Create a function that calculates total amount of sales for each object and saves it to key "weeklyTotalSales" of relevant object. (total amount of weekSoldItems array elements) */

    // for (let item of products) {
    //   weeklyTotalSales.call(item)
    //   console.log(item);
    // }

    function weeklyTotalSales () {
      let sum = 0;
      for (let arguments of this.weekSoldItems ){
        sum += arguments
      }
      this.weeklyTotalSales = sum
    }

    /* 3. Create a function that calculates weekly earnings of each object and saves it to key "weeklyEarning" of relevant object. taxRate is an argument of this function (use 10% as an argument)
    (weeklyEarning = (weeklyTotalSales * lastPrice) - (weeklyTotalSales * lastPrice * taxRate / 100))
    (taxRate is an argument) */

    for (let item of products) {
      lastPrice.call(item)
      weeklyTotalSales.call(item)
      weeklyEarning.apply(item, [10]);
      // console.log(item);
    }
    function weeklyEarning (taxRate) {
      this.weeklyEarning = (this.weeklyTotalSales * this.lastPrice) - (this.weeklyTotalSales * this.lastPrice * taxRate / 100)

    }

    /* 4. Print console the total amount of weeklyEarnings from all these objects */

    let result = 0;
function weeklyEarningsAll() {
result += this.weeklyEarning
}
for (let item of products){
  weeklyEarningsAll.call(item)
  
}
console.log(result);

    // /*5. With a loop print the updated version of all objects  */

for (let item of products) {
  console.log(item);
}