/*
 * Create an array of 5 fruit and log each fruit
 */

const fruits = ["apple", "orange", "paw-paw", "mango", "pear"];
for (let fruit = 0; fruit <= fruits.length - 1; fruit++) {
  console.log(fruits[fruit]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

for (let fruit in fruits) {
  console.log(fruit);
}

/*
 * get the first and the last element of a array
 */

const food = ["beans", "rice", "garri", "yam", "potatoes"];
console.log(food[0]);
console.log(food[food.length - 1]);

/*
 * Add an element to the beginning and the end of an array
 */
food.unshift("Plantain");
console.log(food);

food.push("bannana");
console.log(food);

/*
 * remove the first and last element from an array
 */
food.pop();
console.log(food);
food.splice(0, 1);
console.log(food);

/*
 * find the index of a specific element in an array
 */
const people = ["grace", "john", "levi", "peter", "mary", "favour", "esther"];
console.log(people.indexOf("mary"));

/*
 * Check if an array includes a certain value
 */
const people1 = ["grace", "john", "levi", "peter", "mary", "favour", "esther"];
console.log(people.includes("john"));

/*
 * Loop through an array using for and forEach
 */
const people3 = ["grace", "john", "levi", "peter", "mary", "favour", "esther"];
for (let people = 0; people <= 7 - 1; people++) {
  console.log(`${people}: ${people3[people]}`);
}

for (let people of people3) {
  console.log(people);
}

for (let people in people3) {
  console.log(people);
}

const people4 = ["grace", "john", "levi", "peter", "mary", "favour", "esther"];
people4.forEach((people, index) => {
  console.log(`The number ${index + 1} is having the name ${people}`);
});

const cars = ["Toyota", "Camry", "Benz", "Lexus", "Ford"];

cars.forEach(function (car, index) {
  if (index === 4 && car === "Ford") {
    console.log(`The first car is ${car}`);
  } else {
    console.log("Your answer is wrong");
  }
});

const students = [
  { name: "Liam", age: 14 },
  { name: "Emma", age: 27 },
  { name: "Noah", age: 16 },
  { name: "Olivia", age: 22 },
  { name: "William", age: 12 },
  { name: "Ava", age: 30 },
  { name: "James", age: 21 },
  { name: "Isabella", age: 13 },
  { name: "Benjamin", age: 19 },
  { name: "Sophia", age: 15 },
  { name: "Lucas", age: 25 },
  { name: "Charlotte", age: 20 },
  { name: "Mason", age: 17 },
  { name: "Amelia", age: 29 },
  { name: "Ethan", age: 18 },
  { name: "Mia", age: 26 },
  { name: "Alexander", age: 23 },
  { name: "Harper", age: 14 },
  { name: "Henry", age: 11 },
  { name: "Evelyn", age: 16 },
  { name: "Jacob", age: 19 },
  { name: "Abigail", age: 28 },
  { name: "Michael", age: 15 },
  { name: "Emily", age: 24 },
  { name: "Daniel", age: 13 },
  { name: "Ella", age: 20 },
  { name: "Logan", age: 17 },
  { name: "Elizabeth", age: 22 },
  { name: "Jackson", age: 12 },
  { name: "Camila", age: 18 },
  { name: "Sebastian", age: 21 },
  { name: "Luna", age: 16 },
  { name: "Jack", age: 19 },
  { name: "Sofia", age: 30 },
  { name: "Aiden", age: 14 },
  { name: "Scarlett", age: 11 },
  { name: "Owen", age: 25 },
  { name: "Victoria", age: 23 },
  { name: "Samuel", age: 17 },
  { name: "Aria", age: 27 },
  { name: "Matthew", age: 10 },
  { name: "Grace", age: 26 },
  { name: "Joseph", age: 20 },
  { name: "Chloe", age: 13 },
  { name: "Levi", age: 28 },
  { name: "Penelope", age: 15 },
  { name: "David", age: 12 },
  { name: "Layla", age: 24 },
  { name: "John", age: 18 },
  { name: "Riley", age: 29 },
];

//15 to 20, 15 and below, 20 and above
const studentWithFifteenToTwenty = [];
const studentBelowFifteen = [];
const studentWithTwentyAbove = [];

students.forEach(function (student) {
  if (student.age >= 15 && student.age <= 19) {
    studentWithFifteenToTwenty.push(student);
  } else if (student.age <= 14) {
    studentBelowFifteen.push(student);
  } else if (student.age >= 20) {
    studentWithTwentyAbove.push(student);
  }
});

console.log(studentWithFifteenToTwenty);
console.log(studentBelowFifteen);
console.log(studentWithTwentyAbove);

const persons = [
  { name: "Liam", age: 14, department: "computer science" },
  { name: "Emma", age: 27 },
  { name: "Noah", age: 16 },
  { name: "Olivia", age: 22 },
  { name: "William", age: 12 },
  { name: "Ava", age: 30 },
  { name: "James", age: 21 },
  { name: "Isabella", age: 13 },
  { name: "Benjamin", age: 19 },
  { name: "Sophia", age: 15 },
  { name: "Lucas", age: 25 },
  { name: "Charlotte", age: 20 },
  { name: "Mason", age: 17 },
  { name: "Amelia", age: 29 },
  { name: "Ethan", age: 18 },
  { name: "Mia", age: 26 },
  { name: "Alexander", age: 23 },
  { name: "Harper", age: 14 },
  { name: "Henry", age: 11 },
  { name: "Evelyn", age: 16 },
  { name: "Jacob", age: 19 },
  { name: "Abigail", age: 28 },
  { name: "Michael", age: 15 },
  { name: "Emily", age: 24 },
  { name: "Daniel", age: 13 },
  { name: "Ella", age: 20 },
  { name: "Logan", age: 17 },
  { name: "Elizabeth", age: 22 },
  { name: "Jackson", age: 12 },
  { name: "Camila", age: 18 },
  { name: "Sebastian", age: 21 },
  { name: "Luna", age: 16 },
  { name: "Jack", age: 19 },
  { name: "Sofia", age: 30 },
  { name: "Aiden", age: 14 },
  { name: "Scarlett", age: 11 },
  { name: "Owen", age: 25 },
  { name: "Victoria", age: 23 },
  { name: "Samuel", age: 17 },
  { name: "Aria", age: 27 },
  { name: "Matthew", age: 10 },
  { name: "Grace", age: 26 },
  { name: "Joseph", age: 20 },
  { name: "Chloe", age: 13 },
  { name: "Levi", age: 28 },
  { name: "Penelope", age: 15 },
  { name: "David", age: 12 },
  { name: "Layla", age: 24 },
  { name: "John", age: 18 },
  { name: "Riley", age: 29 },
];

const personWithFifteenToTwenty = [];
const personBelowFifteen = [];
const personWithTwentyAbove = [];

for (let person = 0; person <= persons.length - 1; person++) {
  if (persons[person].age >= 15 && persons[person].age <= 19) {
    personWithFifteenToTwenty.push(persons[person]);
  } else if (persons[person].age <= 14) {
    personBelowFifteen.push(persons[person]);
  } else if (persons[person].age >= 20) {
    personWithTwentyAbove.push(persons[person]);
  }
}

console.log(personWithFifteenToTwenty);
console.log(personBelowFifteen);
console.log(personWithTwentyAbove);

const universityStudents = [
  { name: "Liam", age: 14, department: "computer science" },
  { name: "Emma", age: 27, department: "literature" },
  { name: "Noah", age: 16, department: "biology" },
  { name: "Olivia", age: 22, department: "mathematics" },
  { name: "William", age: 12, department: "engineering" },
  { name: "Ava", age: 30, department: "philosophy" },
  { name: "James", age: 21, department: "computer science" },
  { name: "Isabella", age: 13, department: "mathematics" },
  { name: "Benjamin", age: 19, department: "biology" },
  { name: "Sophia", age: 15, department: "engineering" },
  { name: "Lucas", age: 25, department: "literature" },
  { name: "Charlotte", age: 20, department: "philosophy" },
  { name: "Mason", age: 17, department: "computer science" },
  { name: "Amelia", age: 29, department: "mathematics" },
  { name: "Ethan", age: 18, department: "biology" },
  { name: "Mia", age: 26, department: "literature" },
  { name: "Alexander", age: 23, department: "engineering" },
  { name: "Harper", age: 14, department: "philosophy" },
  { name: "Henry", age: 11, department: "computer science" },
  { name: "Evelyn", age: 16, department: "mathematics" },
  { name: "Jacob", age: 19, department: "biology" },
  { name: "Abigail", age: 28, department: "literature" },
  { name: "Michael", age: 15, department: "engineering" },
  { name: "Emily", age: 24, department: "philosophy" },
  { name: "Daniel", age: 13, department: "computer science" },
  { name: "Ella", age: 20, department: "mathematics" },
  { name: "Logan", age: 17, department: "biology" },
  { name: "Elizabeth", age: 22, department: "engineering" },
  { name: "Jackson", age: 12, department: "literature" },
  { name: "Camila", age: 18, department: "philosophy" },
  { name: "Sebastian", age: 21, department: "computer science" },
  { name: "Luna", age: 16, department: "biology" },
  { name: "Jack", age: 19, department: "mathematics" },
  { name: "Sofia", age: 30, department: "engineering" },
  { name: "Aiden", age: 14, department: "literature" },
  { name: "Scarlett", age: 11, department: "philosophy" },
  { name: "Owen", age: 25, department: "computer science" },
  { name: "Victoria", age: 23, department: "biology" },
  { name: "Samuel", age: 17, department: "mathematics" },
  { name: "Aria", age: 27, department: "literature" },
  { name: "Matthew", age: 10, department: "engineering" },
  { name: "Grace", age: 26, department: "philosophy" },
  { name: "Joseph", age: 20, department: "computer science" },
  { name: "Chloe", age: 13, department: "biology" },
  { name: "Levi", age: 28, department: "literature" },
  { name: "Penelope", age: 15, department: "mathematics" },
  { name: "David", age: 12, department: "engineering" },
  { name: "Layla", age: 24, department: "philosophy" },
  { name: "John", age: 18, department: "computer science" },
  { name: "Riley", age: 29, department: "biology" },
];

const computerScienceStudent = [];
const mathematicsStudent = [];
const biologyStudent = [];
const literatureStudent = [];
const engineeringStudent = [];
const philosophyStudent = [];

for (
  let universityStudent = 0;
  universityStudent <= universityStudents.length - 1;
  universityStudent++
) {
  if (universityStudents[universityStudent].department === "computer science") {
    computerScienceStudent.push(universityStudents[universityStudent]);
  } else if (
    universityStudents[universityStudent].department === "mathematics"
  ) {
    mathematicsStudent.push(universityStudents[universityStudent]);
  }
}

console.log(computerScienceStudent);
console.log(mathematicsStudent);

universityStudents.forEach((universityStudent) => {
  if (universityStudent.department === "engineering") {
    engineeringStudent.push(universityStudent);
  }
});
console.log(engineeringStudent);

/*
 * Reverse the order of elements in an array.
 */

const phones = ["Samsung", "Techno", "Infinix", "Motorolla", "Iphone", "Redmi"];
phones.reverse();
console.log(phones);

/*
 * Merge two arrays using concat and spread operator.
 */

const places = ["church", "market", "school", "mosque", "village"];
const color = ["red", "blue", "black", "green", "purple", "pink"];

const _addTwoArray = places.concat(color);

const __addTwoArray = [...places, ...color];

console.log(_addTwoArray);
console.log(__addTwoArray);

/*
 * Sort an array of numbers in ascending and descending order
 */
const arrayOfNum = [2, 5, 1, 6, 3, 9, 7, 11, 14, 12, 16, 15, 17, 4, 19, 8];

const ascending = [...arrayOfNum].sort((a, b) => a - b);
console.log(ascending);

const descending = [...arrayOfNum].sort((a, b) => b - a);
console.log(descending);

/*
 * Filter out even numbers from an array.
 */
const filterEvenNum = [2, 5, 1, 6, 3, 9, 7, 11, 14, 12, 16, 15, 17, 4, 19, 8];
const oddNumber = [];
const evenNumber = [];

for (let num = 0; num <= filterEvenNum.length - 1; num++) {
  if (num % 2 != 0) {
    oddNumber.push(num);
  } else if (num % 2 != 2) {
    evenNumber.push(num);
  }
}

console.log(oddNumber);
console.log(evenNumber);

/*
 * Square every number in an array using map.
 */

const squareNumberArr = [2, 5, 1, 6, 3, 9, 7, 11, 14, 12, 16, 15, 17, 4, 19, 8];

// const result = squareNumberArr.map((num) => num * num);

const result = squareNumberArr.map(function (num) {
  return num * num;
});
console.log(result);

//using the for loop
let squareResult = [];
for (let squareNumberArray in squareNumberArr) {
  let result =
    squareNumberArr[squareNumberArray] * squareNumberArr[squareNumberArray];
  squareResult.push(result);
}
console.log(squareResult);

//using the forEach loop
// const squareNumberArr = [2, 5, 1, 6, 3, 9, 7, 11, 14, 12, 16, 15, 17, 4, 19, 8];
// let squareResult = [];
// squareNumberArr.forEach( (squareNumberArray) =>{
//   let result = squareNumberArray * squareNumberArray;
//       squareResult.push(result);
// });
// console.log(squareResult);

/*
 * Count the number of times each value appears in an array
 */

const numberAppears = [
  2, 5, 1, 6, 3, 3, 9, 7, 2, 11, 14, 12, 16, 10, 1, 6, 9, 2, 12, 8, 2, 7, 1, 3,
  8, 15, 17, 4, 10, 19, 8,
];

const count = {};

numberAppears.forEach((num) => {
  count[num] = (count[num] || 0) + 1;
});

console.log(count);

/*
 * Remove duplicates from an array.
 */
const removeDuplicate = [
  2, 5, 1, 6, 3, 3, 9, 7, 2, 11, 14, 12, 16, 10, 1, 6, 9, 2, 12, 8, 2, 7, 1, 3,
  8, 15, 17, 4, 10, 19, 8,
];
const removeResult = [];
for (let remove = 0; remove <= removeDuplicate.length - 1; remove++) {
  if (!removeResult.includes(removeDuplicate[remove])) {
    removeResult.push(removeDuplicate[remove]);
  }
}

console.log(removeResult);

/*
 * Find the largest and smallest number in an array.
 */

const smallestAndLargest = [
  2, 5, 1, 6, 3, 9, 7, 11, 14, 12, 16, 15, 17, 4, 19, 8,
];
let small = smallestAndLargest[0];
let large = smallestAndLargest[0];

for (number = 0; number < smallestAndLargest.length; number++) {
  if (smallestAndLargest[number] < small) {
    small = smallestAndLargest[number];
  } else if (smallestAndLargest[number] > large) {
    large = smallestAndLargest[number];
  }
}

// for (let number = 1; number < smallestAndLargest.length; number++) {
//   if (smallestAndLargest[number] < small) {
//     small = smallestAndLargest[number];
//   } else if (smallestAndLargest[number] > large) {
//     large = smallestAndLargest[number];
//   }
// }

console.log(small);
console.log(large);

/*
 * Sum all elements in an array using reduce.
 */
const sumArrayNum = [2, 5, 1, 6, 3, 9, 7, 11, 14, 12, 16, 15, 17, 4, 19, 8];
let sumResult = 0;

for (let arrayNum = 0; arrayNum < sumArrayNum.length - 1; arrayNum++) {
  sumResult = sumResult + sumArrayNum[arrayNum];
}
console.log(sumResult);

/*
 * Flatten a nested array (one level deep).
 */

const flatArray = [2, 3, [3, 5, 7], 5, 9, [1, 8, 3], 8];
const flatResult = flatArray.flat();
console.log(flatResult);

/*
 * Find all elements greater than a given value.
 */

const numbers = [2, 5, 1, 6, 3, 9, 7, 11, 14, 12, 16, 15, 17, 4, 19, 8];
const givenNumber = [4];
const finalResult = [];

// for(let number = 0; number < numbers.length; number++){
//     if(numbers[number] > givenNumber){
//         finalResult.push(numbers[number]);
//     }
// }
// console.log(finalResult);

for (let number in numbers) {
  if (numbers[number] > givenNumber) {
    finalResult.push(numbers[number]);
  }
}
console.log(finalResult);

/*
 * Insert an element at a specific index.
 */
const arrayNumber = [2, 5, 1, 6, 3, 9, 7, 11, 14, 12, 16, 15, 17, 4, 19, 8];
const numberToInsert = 50;

arrayNumber.splice(4, 0, numberToInsert);
console.log(arrayNumber);

/*
 * Replace a specific element in an array
 */
const replaceArrayNumber = [
  2, 5, 1, 6, 3, 9, 7, 11, 14, 12, 16, 15, 17, 4, 19, 8,
];
const numberToReplace = 11;
replaceArrayNumber.splice(3, 1, numberToReplace);
console.log(replaceArrayNumber);

/*
 * Chunk an array into smaller arrays of a specific size.
 */
const data = [1, 2, 3, 4, 5, 6, 7, 4, 9, 2];
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const chunked = chunkArray(data, 3);

console.log(chunked);

/*✅ 30 JavaScript Array Exercises (from Beginner to Advanced)

🟢 Beginner (1–10)
1. Create an array of 5 fruits and log each fruit.

2. Get the first and last element of an array.

3. Add an element to the beginning and end of an array.

4. Remove the first and last element from an array.

5. Find the index of a specific element in an array.

6. Check if an array includes a certain value.

7. Loop through an array using for and forEach.

8. Reverse the order of elements in an array.

9. Merge two arrays using concat and spread operator.

10.Sort an array of numbers in ascending and descending order.

🟡 Intermediate (11–20)
11. Filter out even numbers from an array.

12. Square every number in an array using map.

13. Count the number of times each value appears in an array.

14. Remove duplicates from an array.

15. Find the largest and smallest number in an array.

16. Sum all elements in an array using reduce.

17. Flatten a nested array (one level deep).

18. Find all elements greater than a given value.

19. Insert an element at a specific index.

20. Replace a specific element in an array.

🔴 Advanced (21–30)
21. Chunk an array into smaller arrays of a specific size.

22. Find the intersection of two arrays.

23. Find the difference between two arrays.

24. Group array of objects by a property.

25. Create an array of unique values from an array of objects.

26. Sort an array of objects by a key (e.g., age).

27. Remove falsy values from an array.

28. Deep flatten a nested array (recursive).

29. Shuffle the elements of an array randomly.

30. Find the longest word in an array of strings.
*/

const bills = [125, 555, 44];
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};
let mainResult = [];

for (let TipResult = 0; TipResult <= bills.length - 1; TipResult++) {
  let resultHolder = calcTip(bills[TipResult]);
  mainResult.push(resultHolder);
}

console.log(mainResult);

const jonasArray = {
  firstName: "Jonas",
  lastName: "John",
  age: 32,
  job: "teacher",
  friends: ["favour", "Mary", "Prince", "Joe"],
};
