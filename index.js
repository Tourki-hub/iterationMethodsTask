//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

//Part 1: Filtering

//Write code to perform the following tasks using the filter method:
//Q1) Create a new array containing numbers that are greater than or equal to 25.
//Q2) Create a new array containing numbers that are divisible by 5.

const numbersGreaterThan25 = (numbers) => {
  return numbers.filter((number) => number >= 25);
};

console.log(numbersGreaterThan25(numbers));

//-----------------------------------------------------

const numbersDivisibleBy5 = (numbers) => {
  return numbers.filter((number) => number % 5 == 0);
};

console.log(numbersDivisibleBy5(numbers));
//----------------------------------------------------
//Part 2: Mapping

//Write code to perform the following tasks using the map method:

//Q3) Create a new array that contains each number squared.
//Q4) Create a new array that contains each number multiplied by 2.

const numberSquared = (number) => {
  return numbers.map((number) => number ** 2);
};
console.log(numberSquared(numbers));

const multiNumBy2 = (number) => {
  return numbers.map((number) => number * 2);
};

//console.log(multiNumBy2(numbers));
//----------------------------------------------------------------

//Part 3: Combining Filtering and Mapping

//Combine the filter and map methods to perform the following tasks:

//Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
//Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.

const numbersGreaterThan20 = numbers
  .filter((number) => {
    if (number >= 20) {
      return true;
    } else {
      return false;
    }
  })
  .map((number) => {
    return number ** 2;
  });
console.log(numbersGreaterThan20);

const result = numbers
  .filter((number) => {
    if (number % 5 == 0) {
      return true;
    } else {
      return false;
    }
  })
  .map((number) => {
    return number * 3;
  });
console.log(result);
