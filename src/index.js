// numbers is an array of numbers. Multiply all
// numbers contained in array by multiplier
function multiply(numbers, multiplier){
  for(var i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i] * multiplier;
  }

  return numbers;
}

// is an array of positive and negative numbers
// make them all absolute numbers
function absolute(numbers){
  for(var i = 0; i < numbers.length; i++){
    numbers[i] = +numbers[i];
  }

  return numbers;
}
// names is an array of name of nameObjects
// {
//   firstName: 'Alan',
//   lastName: 'Sugar'
// }
// concatenate first and last names and return
// resulting array of names
function concatNames(names){
  for(var i = 0; i < names.length; i++){
    names[i] = `${names[i].firstName} ${names[i].lastName}`;
  }
  return names;
}

// things is an array of numbers and strings. Convert
// numbers in array to strings. For example 5 to "5"
function numbersToStrings(things){
  for(var i = 0; i < things.length; i++){
    things[i] = typeof things[i] === 'number' ? things[i]+'' : things[i];
  }

  return things;
}

// strings is an array of strings. sort them by length
function sortByLength(strings){
  strings.sort(function(a,b){
    return a.length - b.length;
  });

  return strings;
}

// numbers is an array of numbers. Get last two numbers
// from numbers
function lastTwo(numbers){
  return numbers.splice(-2);
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
  for(var i = 0; i < cars.length; i++){
    cars[i].year++;
  }
  return cars;
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
  Object.keys(sales).forEach(function(key){
    sales[key] = sales[key].reduce(function(acc, sale){
      return acc + sale;
    }, 0);
  });
}
// stuff is an object with string keys and
// string values. All keys and values are unique
// Swap keys and values around, so that keys
// become values and values become keys.
// {
//   a: 'b',
//   c: 'd'
// }
function swapKeysAndValues(stuff){
  Object.keys(stuff).forEach(function(key){
    const value = stuff[key];
    stuff[value] = key;
    delete stuff[key];
  });

  return stuff;
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
