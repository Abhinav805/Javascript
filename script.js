// console.log("Hello World!");
// console.log("Test");

// HOW TO DEFINE VARIABLES
// var variableName = 'Welcome to variables';
// console.log(variableName);


// let variableName = 'Welcome to variables';
// variableName = 'Hello this is changed variable';
// console.log(variableName);

// const constantVar = "This will not change in future";

// console.log(constantVar);

// const _name = "Abhinav";
// const $name = "Meow";

// console.log(_name);
// console.log($name);

// const singleTicks = 'Hello';
// const doubleTicks = "Hello";



// STRING VARIABLES
const name = "Abhinav";

const backTicks = `Hello, ${name}`;
console.log(backTicks);

const addition = `${2+2}`
console.log(addition)

console.log(typeof(addition))


// NUMBER VARIABLES
const firstNum = 5;
const secondNum = 10;

const result = firstNum/secondNum;

console.log(typeof(result));


// Booleans 

const isCool = true;
console.log(typeof isCool);


// Object

const person = {
    name : 'John',
    age : 25
}

console.log(person);
// DOT NOTATION
console.log(person.name);
console.log(typeof person);
console.log(typeof person.name);

// Array

const arr = [1,2,3,4];
console.log(arr);

// Date

const date = new Date();
console.log(typeof date);


// Dynamically  typed
let message = "Hello, World";

console.log(typeof message);

message = 5;

console.log(typeof message);


// Comparator Operator
const a = 10;
const b = 5;

console.log(a>b)


// Strict Equality // Three equal signs

console.log(a === b)

// Strict Inequality 


console.log(5=="5")// It checks for the value 

console.log(5==="5")// It checks for the type 

// Logical operator // AND OR NOT

console.log(true && false)

console.log(true|| false)


// LOGICAL OPERATOR

const age = 18;

if(age >= 18)
{
    console.log("You can enter");
}
else if(age === 18)
{
    console.log("You just turned 18");
}
else{
    console.log('Grow up');
}

// WHILE LOOP

let i = 1

while(i < 10)
{
    console.log(i);
    i++
}


// FOR Loop

for (let i =10; i> 0; i--)
{
    console.log(i)
}


// FUNCTION 

// FIRST DEFINATION of a function

// THIS HAS ACCESS TO THIS KEYWORD
function square(number)
{
    // have access to this key word
    console.log("I am inside the square function");
    return number*number;
}

// A FUNCTION CALL (calling/ executing a function )

const sqrtResult = square(5);

console.log("The square of the number is : " + sqrtResult);


// AN ARROW FUNCTION

// const name = (params)=> {

// }

function sayHi(name)
{
    console.log(`Hi, ${name}`);
}


sayHi('Abhinav');

// Every Javascript Function returns undefined unless specified

function add(a,b)
{
    return a+b;
}

const sum = add(2,3);

console.log("The sum of 2 given numbers are " +sum);


// ARROW FUNCTION

const squareFunction = (number)=>{
    return number*number;
}

const resultOfSqt = squareFunction(5);
console.log("The square by the arrow function : "+resultOfSqt);


// SHORTER VERSION OF ARROW FUNCTION for only 1 return statement

const shortarrowresultsqrt = (number)=> number * number;

const shortarrowResult = shortarrowresultsqrt(10);

console.log("Shorter version of arrow function :"+ shortarrowResult)






