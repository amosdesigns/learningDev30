const myAge = 57; // you asked for my age.
let earlyYears = 2; // the first two years of a dog's life.
earlyYears *= 10.5; // the first two years of a dog's life.
let laterYears = myAge - 2; // the rest of the dog's life.
laterYears *= 4; // step 5

console.log(`earlyYears: ${earlyYears} and laterYears: ${laterYears}`); //step6
const myAgeInDogYears = earlyYears + laterYears; // step 7
const myName = "Jerome".toLowerCase(); // step 8
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
); // step 9
