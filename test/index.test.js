const functions = require('../src/index.js');

test('multiply', function(){
  const numbers = [1,342,3423423,11];
  const expectedNumbers = [1,342,3423423,11];
  const expectedOutput = [2, 684, 6846846, 22];
  const result = functions.multiply(numbers,2);
  expect(result).toEqual(expectedOutput);
  expect(numbers).toEqual(expectedNumbers);
});

test('multiply 2', function(){
  const numbers = [14,23,56,74];
  const expectedNumbers = [14,23,56,74];
  const expectedOutput = [28,46,112,148];
  const result = functions.multiply(numbers,2);
  expect(result).toEqual(expectedOutput);
  expect(numbers).toEqual(expectedNumbers);
});


test("absolute",function(){
  const numbers=[9,3,8,-4,-5,-66,9];
  const expectedNumbers=[9,3,8,-4,-5,-66,9];
  const expectedOutput=[9,3,8,4,5,66,9];
  const output=functions.absolute(numbers);
  expect(output).toEqual(expectedOutput);
  expect(numbers).toEqual(expectedNumbers);
})

test("absolute",function(){
  const numbers=[9,-99,-87,-66,9];
  const expectedNumbers=[9,-99,-87,-66,9];
  const expectedOutput=[9,99,87,66,9];
  const output=functions.absolute(numbers);
  expect(output).toEqual(expectedOutput);
  expect(numbers).toEqual(expectedNumbers);
})

test("concatNames", function(){
  const names=[{firstName:"John", lastName:"Bob"},{firstName:"Linda", lastName:"Spears"},{firstName:"Jim", lastName:"Khoo"}]
  const expectedNames = [{firstName:"John", lastName:"Bob"},{firstName:"Linda", lastName:"Spears"},{firstName:"Jim", lastName:"Khoo"}]
  const expectedOutput= ["JohnBob","LindaSpears","JimKhoo"]
  const output=functions.concatNames(names);
  expect(output).toEqual(expectedOutput);
  expect(names).toEqual(expectedNames);
});

test("numbers to strings",function(){
  const things=[4,5,"haha","oh",999];
  const expectedThings =[4,5,"haha","oh",999];
  const expectedOutput =["4","5","haha","oh","999"];
  const output =functions.numbersToStrings(things);
  expect(output).toEqual(expectedOutput);
  expect(things).toEqual(expectedThings);
})

test("numbers to strings",function(){
  const things=[999,"haha",88,"oh",999];
  const expectedThings =[999,"haha",88,"oh",999];
  const expectedOutput =["999","haha","88","oh","999"];
  const output =functions.numbersToStrings(things);
  expect(output).toEqual(expectedOutput);
  expect(things).toEqual(expectedThings);
})

test("sortByLength", function(){
  const strings =["324efdddd","3e4","ddfsf"];
  const expectedStings =["324efdddd","3e4","ddfsf"];
  const expectedOutput =["3e4","ddfsf","324efdddd"];
  const output =functions.sortByLength(strings);
  expect(output).toEqual(expectedOutput);
  expect(strings).toEqual(expectedStings);
})

test("sortByLength", function(){
  const strings =["string", "word", "hippopotamus"];
  const expectedStings =["string", "word", "hippopotamus"];
  const expectedOutput =["word","string", "hippopotamus"];
  const output =functions.sortByLength(strings);
  expect(output).toEqual(expectedOutput);
  expect(strings).toEqual(expectedStings);
})

test("last two numbers",function(){
  const numbers=[3,45,678,999,506];
  const expectedNumbers=[3,45,678,999,506];
  const expectedOutput=[999,506];
  const output = functions.lastTwo(numbers);
  expect(output).toEqual(expectedOutput);
  expect(numbers).toEqual(expectedNumbers);
})

test("last two numbers",function(){
  const numbers=[3,45,678,999,506,88765,6743];
  const expectedNumbers=[3,45,678,999,506,88765,6743];
  const expectedOutput=[88765,6743];
  const output = functions.lastTwo(numbers);
  expect(output).toEqual(expectedOutput);
  expect(numbers).toEqual(expectedNumbers);
})

test("incrementYear", function(){
  const cars = [{
    make: "Vauxhall",
    model: "Astra",
    year: 1999
  },
  {
    make: "Ford",
    model: "FOcus",
    year: 1992
  },
  {
    make: "Tesla",
    model: "XS",
    year: 2017
  }];
  const expectedCars = [{
    make: "Vauxhall",
    model: "Astra",
    year: 1999
  },
  {
    make: "Ford",
    model: "FOcus",
    year: 1992
  },
  {
    make: "Tesla",
    model: "XS",
    year: 2017
  }];
  const expectedOutput = [{
    make: "Vauxhall",
    model: "Astra",
    year: 2000
  },
  {
    make: "Ford",
    model: "FOcus",
    year: 1993
  },
  {
    make: "Tesla",
    model: "XS",
    year: 2018
  }];
  const output = functions.incrementYear(cars);
  expect(output).toEqual(expectedOutput);
  expect(cars).toEqual(expectedCars);
});


test("incrementYear2", function(){
  const cars = [{
    make: "Vaux",
    model: "Blue",
    year: 1995
  },
  {
    make: "Toyota",
    model: "Red",
    year: 1980
  },
  {
    make: "Ferrari",
    model: "FastOne",
    year: 2010
  }];
  const expectedCars = [{
    make: "Vaux",
    model: "Blue",
    year: 1995
  },
  {
    make: "Toyota",
    model: "Red",
    year: 1980
  },
  {
    make: "Ferrari",
    model: "FastOne",
    year: 2010
  }];
  const expectedOutput = [{
    make: "Vaux",
    model: "Blue",
    year: 1996
  },
  {
    make: "Toyota",
    model: "Red",
    year: 1981
  },
  {
    make: "Ferrari",
    model: "FastOne",
    year: 2011
  }];
  const output = functions.incrementYear(cars);
  expect(output).toEqual(expectedOutput);
  expect(cars).toEqual(expectedCars);
});

test("total sales",function(){
  const sales = {
        Mary: [57, 12, 31, 4],
        Dave: [43, 2, 12]
      };
  const expectedSales = {
        Mary: [57, 12, 31, 4],
        Dave: [43, 2, 12]
      };
  const expectedOutput = {
        Mary: 104,
        Dave: 57
      };
  const output = functions.totalSales(sales);
  expect(output).toEqual(expectedOutput);
  expect(sales).toEqual(expectedSales);
})

test("total sales",function(){
  const sales = {
        Mary: [1, 4],
        Dave: [2, 12]
      };
  const expectedSales = {
        Mary: [1, 4],
        Dave: [2, 12]
      };
  const expectedOutput = {
        Mary: 5,
        Dave: 14
      };
  const output = functions.totalSales(sales);
  expect(output).toEqual(expectedOutput);
  expect(sales).toEqual(expectedSales);
})

test("swapKeysAndValues", function(){
  const stuff = {
    a: 'b',
    c: 'd'
  };
  const expectedStuff = {
    a: 'b',
    c: 'd'
  };
  const expectedOutput = {
    b: 'a',
    d: 'c'
  }
  const output = functions.swapKeysAndValues(stuff);
  expect(output).toEqual(expectedOutput);
  expect(stuff).toEqual(expectedStuff);
});


test("swapKeysAndValues2", function(){
  const stuff = {
    t: 's',
    w: 'r'
  };
  const expectedStuff = {
    t: 's',
    w: 'r'
  };
  const expectedOutput = {
    s: 't',
    r: 'w'
  }
  const output = functions.swapKeysAndValues(stuff);
  expect(output).toEqual(expectedOutput);
  expect(stuff).toEqual(expectedStuff);
})


test("parseDates",function(){
  const dates = ['2018-02-12','2018-01-11','1999-12-31'];
  const expectedDates = ['2018-02-12','2018-01-11','1999-12-31'];
  const expectedOutput = [{12th Feb 2018},'2018-01-11','1999-12-31']?
  const output = functions.parseDates(dates);
  expect(output).toEqual(expectedOutput);
  expect(dates).toEqual(expectedDates);
})
