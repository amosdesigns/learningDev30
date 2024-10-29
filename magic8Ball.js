const userName = prompt('What is your name?', '');
const message = userName.trim() ? `Hello, ${userName}!` : 'Hello!';
const userQuestion = prompt( 'What is your question for the Magic 8 Ball?', '' );
const randomNumber = Math.floor( Math.random() * 8 );
const eightBall = '';
// switch ( randomNumber ) {
//   case 0:
//     eightBall = 'It is certain';
//     break;
//   case 1:
//     eightBall = 'It is decidedly so';
//     break;
//   case 2:
//     eightBall = 'Reply hazy try again';
//     break;
//   case 3:
//     eightBall = 'Cannot predict now';
//     break;
//   case 4:
//     eightBall = 'Do not count on it';
//     break;
//   case 5:
//     eightBall = 'My sources say no';
//     break;
//   case 6:
//     eightBall = 'Outlook not so good';
//     break;
//   case 7:
//     eightBall = 'Signs point to yes';
//     break;
//   default:
//     eightBall = 'Invalid';
//     break;
// }
const reply = [
  `It is certain,my friend, ${userName}`,
  ` ${userName}, It is decidedly so`,
  `Sorry,  ${userName}. Reply hazy try again`,
  `Cannot predict now,  ${userName}`,
  `Do not count on it,  ${userName}`,
  ` ${userName}, My sources say no`,
  `Outlook not so good,  ${userName}`,
  ` ${userName}, Signs point to yes`,
];
console.log(` asked: ${userQuestion} -  ${reply[randomNumber]}`);