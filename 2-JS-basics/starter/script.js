/*
Variable and Data Types
console.log("Hello World!!!");

var firstName = "John";

console.log(firstName);
//String and Variable
var lastName = "Smith";
var age = 28; 
//boolean
var fullAge = true;
console.log(fullAge);
//undefined
var job;
console.log(job);
//now defines
job = "teacher";
console.log(job); 

*/

//Variable mutation and type coercion

// var _3years = 3; 

// var firstName = "John";
// var age = 28;

// console.log(firstName + " " + age);

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(firstName = " is a " + age + " year old " + job + ". Is he married?"  + isMarried);

// //Variable mutation

// age = "twenty eight";
// job = "driver";
// //Gives an alert not a console
// // alert(firstName = " is a " + age + " year old " + job + ". Is he married?"  + isMarried);

// var lastName = prompt("What is his last Name?");
// console.log(firstName + " " +lastName)



// //BASIC OPERATORS.
// var year = 2020
// var yearJohn = year-28;
// var yearMark = year-33;

// console.log(yearJohn);

// console.log(year + 2);

// console.log(year / 10);

// //Logical Variables
// var johnOlder = yearJohn > yearMark;
// console.log(johnOlder);

// //Operator Precedence

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// var markMass = 70;
// var johnMass = 80;

// var markHeight = 1.2;
// var johnHeight = 1.5;

// markBMI = markMass/(markHeight * markHeight);
// johnBMI = johnMass/(johnHeight * johnHeight);

// console.log(markBMI, johnBMI);

// var MarkHigher = markBMI > johnBMI;

// console.log(MarkHigher);

// console.log("Is Mark's BMI higher than John's?" + MarkHigher);


var firstName = "John";
var civilStatus = "single";

if(civilStatus === "married"){
    console.log(firstName + ' is married');
} else {
    console.log(firstName + " Will hopefully marry soon");
}

var isMarried = false;