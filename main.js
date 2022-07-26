// my age currently
var myAge = 32;

//variable called earlyYears that might change
var earlyYears = 2;

//Step 3
earlyYears *= 10.5;

//Step 4
var laterYears = myAge - 2;

//Step 5
laterYears *= 4;

//Step 6
console.log(earlyYears);
console.log(laterYears);

//Step 7
var myAgeInDogYears = earlyYears + laterYears;

//Step 8
var myName = 'Paul'.toLowerCase();
console.log(myName);

//Step 9 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
