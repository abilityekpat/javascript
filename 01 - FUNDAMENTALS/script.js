////////////////////////////////////
// Linking a JavaScript File
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
////////////////////////////////////
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);


// Variable name conventions
////////////////////////////////////
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);



// Data Types
////////////////////////////////////

// let JavaScriptIsFun = true;
// console.log(JavaScriptIsFun);
// console.log(typeof JavaScriptIsFun)

// JavaScriptIsFun = "Yes!";
// console.log(JavaScriptIsFun);
// console.log(typeof JavaScriptIsFun);


// let name = "Grace";
// console.log(name);
// console.log(typeof name);

//Variable declaration let,const and var

// let age = 3;
// age = 34;
// console.log(age);

// const year =1999;
// console.log(year)

//Basic Operators
const ageJonas = 2034 - 1991
const ageSarah = 3023 - 1998
console.log(ageJonas, ageSarah)

// Assignment operators
let x = 15;
x = x + 5;
x += 10 // x = x + 10;
x *= 4 // x = x * 4;
x++; // x = x + 1;
x--; // x = x - 1;
console.log(x)

//comparison operators
console.log(ageJonas > ageSarah);
console.log(ageJonas >= 30);

// const age = 15;
// if(age >=18){
// console.log("Sarah can have a driving License")
// } else {
//     const ageLeft = 18 - age;
//     console.log(`Sarah is too young to drivr, wait for another ${ageLeft} years`)

// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000){
//      century = 20;
// }
// else{
//     century = 21;
// }
// console.log(century);

// //Type conversion
// const year = '1999';
// console.log(Number(year), year)

// console.log(year);

// const newAge = 12


//Equality opearators

// const ageLenght = '18';
// if(Number(ageLenght) === 18){
//     console.log(
//         "You are now becoming an adult"
//     )
// } else{
//     console.log(
//         "You are still a child"
//     )
// }

// const favourite = Number(prompt("What is your favourite number"))
// console.log(favourite);
// console.log(typeof favourite);

//Logical operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision)


const scoreDolphins = (88 + 91 + 89) / 3;
const scoreKoalas = (97 + 112 + 101) / 3;
console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas && scoreDolphins >=1000){
    console.log("Dolphins has win the game");
}else if (scoreKoalas > scoreDolphins && scoreKoalas >=1000){
    console.log("Koalas has won the game")
}else if(scoreDolphins === scoreKoalas){
    console.log("They both won the game")
}else{
    console.log("There was no winner in the show")
}


//Switch

const day = "Thursday"
switch(day){
    case "Monday":
        console.log('Go to the dhow to get food items');
    break;
    case "Tuesday":
        console.log("Go to the gym");
    break;
    case "Wednesday":
    case "Thursday":
        console.log("Going to the mall");
    break;
    default:
        console.log("Not a valid day")
}

const dayActivity = "Friday";
if (dayActivity === "Monday"){
    console.log("Go to the supermarket to get food items")
} else if (dayActivity === "Tuesday"){
    console.log("Going to the mall")
} else {
    console.log("No activity for today");
}


const age = 23;
// age >=20 ? console.log("I am a big girl") : console.log("I am still a child");

const esther = age >= 20 ? "water" : "wine";
console.log(esther);





// const age  = 18;
// if (age < 17){
//     console.log("wine");
// }else{
//     console.log("Water");
// }

// const age = 18;
// let drink;
// if (age >= 18){
//     drink = "Wine"
// }else{
//     drink = "Water"
// }

// console.log(drink);



//function declearation

function fruit(){
    console.log("I have 2 fruit");
}

fruit();

function fruitProcessor(apple, orange){
    const fruits = `i have ${apple} apple and ${orange} orange`
    return fruits;
}

const result = fruitProcessor(4, 7);
console.log(result);

console.log(fruitProcessor(4,8));



function food(light, heavy, moderate){
    const foodType = `i like light food like ${light} for breakfast, will prefer heavy food like ${heavy} for lunch and will go with moderate food like ${moderate} for dinner`
    return foodType;
}

const foodResult = food("tea and bread", "garri and soup", "rice and beans");
console.log(foodResult);


//Function Expression
const birthYear = function(year){
 const age = year - 1990;
 return age;
}
console.log(birthYear(1999));

const person = function(age, grade){
  const name = age - birthYear(1999)
  return name;
}
console.log(person(90, 80));


//Arrow Function
const birthyear = year => year - 1999;
const results = birthYear(2000);
console.log(results);

const birthYears = (day, year, month) => {
  const answer = `I was born on the ${day} day of ${month} in the year ${year}`
  return answer;
}
console.log(birthYears(12,2024,4));

//Array

const friends = ["favour", "grace", "joy"];
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length - 1]);

const addName = friends.push("Mary")
console.log(addName);
console.log(friends);

friends.unshift("Grace");
console.log(friends);
console.log(friends.length);

friends.pop();
console.log(friends);

