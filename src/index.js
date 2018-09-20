// numbers is an array of numbers. Multiply all
// numbers contained in array by multiplier
function multiply(numbers, multiplier){
    const output = numbers.map(function(number){
      return number*multiplier;
    })
    return output;
}

// is an array of positive and negative numbers
// make them all absolute numbers
function absolute(numbers){
  const output = numbers.map(number => {
    if (number<0){
      return -number;
    } else {
      return number;
    }
  })
  return output;

}
// names is an array of name of nameObjects
// {
//   firstName: 'Alan',
//   lastName: 'Sugar'
// }
// concatenate first and last names and return
// resulting array of names
function concatNames(names){
  const concatName = names.map(name => {
    const nameCopy = Object.assign({}, name);
    return `${nameCopy.firstName}${nameCopy.lastName}`
  })
  return concatName;
}

// things is an array of numbers and strings. Convert
// numbers in array to strings. For example 5 to "5"
function numbersToStrings(things){
  const newStrings = things.map(thing =>{
    return thing.toString();
  })
  return newStrings;

}

// strings is an array of strings. sort them by length
function sortByLength(strings){
  const copyStrings = [...strings]
  copyStrings.sort(function(a,b){
    return a.length - b.length;
  });
  return copyStrings;
}

// numbers is an array of numbers. Get last two numbers
// from numbers
function lastTwo(numbers){
  const copyNumbers = [...numbers];
  return copyNumbers.splice(-2);
}

// cars is an array of car objects which look like
// this
// {
//   make: "Vauxhall",
//   model: "Astra",
//   year: 1992
// }
// increment the years by one year for all cars
function incrementYear(cars){
  const incremented = cars.map(car => {
    return Object.assign({}, car, {year: car.year + 1});
  })
    return incremented;
  }


// sales is an object where the key is
// the salespersons name and the value
// is an array containing that person's sales
// as integers. Calculate that each person's
// total sales.
// {
//   Mary: [57, 12, 31, 4],
//   Dave: [43, 2, 12]
// }
function totalSales( sales ){
  let salesCopy = Object.assign({},sales)
  let output = {}
  Object.keys(salesCopy).forEach(salesPerson =>{
      let personTotal = salesCopy[salesPerson].reduce((acc, number) =>{
        return acc + number;
      },0)
    salesCopy[salesPerson] = personTotal
    })
    return salesCopy;
  }



  // for (let i=0; Object.keys(salesCopy).length;i++){
  //   salesCopy[i].reduce


  //
  // Object.keys(sales).forEach(function(key){
  //   let total = 0;
  //
  //   for(var i = 0; i < sales[key].length; i++){
  //     total = total + sales[key][i];
  //   }
  //
  //   sales[key] = total;
  // });
// }



// stuff is an object with string keys and
// string values. All keys and values are unique
// Swap keys and values around, so that keys
// become values and values become keys.
// {
//   a: 'b',
//   c: 'd'
// }
function swapKeysAndValues(stuff){
  let stuffCopy = Object.assign({}, stuff)
  Object.keys(stuffCopy).forEach(function(key){
    const value = stuffCopy[key];
    stuffCopy[value] = key;
    delete stuffCopy[key];
  //
  // Object.keys(stuff).forEach(function(key){
  //   const value = stuff[key];
  //   stuff[value] = key;
  //   delete stuff[key];
  });

  return stuffCopy;
}



// dates is an array of dates in string format
// 'yyyy-mm-dd' convert dates to date object.
// For example, '2018-02-12' is 12th Feb 2018

// Hint: this function has a bug that needs fixing
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
function parseDates(dates){
  for(var i = 0; i < dates.length; i++){
    var dateParts = dates[i].split('-');

    var year = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]);
    var date = parseInt(dateParts[2]);

    dates[i] = new Date(year, month, date);
  }
  return dates;
}

module.exports = {
  multiply,
  absolute,
  concatNames,
  numbersToStrings,
  sortByLength,
  lastTwo,
  incrementYear,
  totalSales,
  swapKeysAndValues,
  parseDates
}

// Stretch goal

// write a function stats it should accept 2 parameters
// 1. A prices array which contains and array of prices
// [8, 9, 10, 4]
// 2. An array of arrays where the inner array contains
// start and end indexes for which we want to calculate
// stats. The second index should always be greater or equal
// to first
// [ [0, 7], [1, 4], [3, 10] ]

// The function should output an array of objects which
// contain statistics calculated for each a set of prices
// as indicated by the corresponding array of indexes.

// [{
//   count: 10,
//   total: 57,
//   min: 4,
//   max: 9,
//   mean: "5.70" <- mean should be have 2 decimal places
//   variance: "3.63", <- variance should be have 2 decimal places
//   stdDeviation: "1.84" <- standard deviation should be have 2 decimal places
// }]

// Implement a solution using multiple pure functions

// Write a unit test for each function
