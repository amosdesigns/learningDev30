let raceNumber = Math.floor( Math.random() * 1000 );
let earlyReg = false;
let age = 18;
if ( earlyReg && age > 18 ) { 
  raceNumber += 1000;
}
if ( earlyReg && age > 18 ) {
  console.log( `you starting race time is 9:30am and your race number is ${raceNumber}` );

} else if ( !earlyReg && age > 18 ) {
  console.log( `you starting race time is 11am and your race number is ${raceNumber}` );
} else if ( age < 18 ) { 
  console.log(`Youth registrants run at 12:30 pm, ${raceNumber} is your race number `);
}