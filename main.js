const kelvin = 293; // The forecast today is 293 Kelvin
//Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
const celsius = kelvin - 273;
const fahrenheit = celsius * ( 9 / 5 ) + 32;
//Let’s convert celsius to fahrenheit by multiplying by 9/5 and adding 32. Store the result in another variable, named fahrenheit.
const TEMPERATURE = Math.floor(fahrenheit);
console.log(`The temperature is ${TEMPERATURE} degrees Fahrenheit.`);