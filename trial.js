//a code that'll return a random letter from my name

// let name = "Wendy";
//charAt works just like index in arrays
// console.log(name.charAt(0) )

//to generate a random nuber 
// console.log(name.charAt(Math.floor(Math.random() * name.length)))

//!TERNARY 
// let testScore = 99;
// let myGrade = testScore > 89 ? "A"
// : testScore > 79 ? "B"  
// : testScore > 69 ? "C" 
// : testScore > 59 ? "D" 
// : testScore > 49 ? "E" 
// : "F";

// console.log(`MY GRADE IS ${myGrade}`)

//!User input
// alert(name)
// let myBoolean = confirm("ok === True\nCancel === false");
// console.log(myBoolean)
// !when you click on ok == it enters a true value and cancel == false
// ! \n indicates a line break
// let myName = prompt("enter your name")
// // console.log(myName ?? "enter your name")
// // !this means that if name entered is a true value, log it to the console and if it is false........
// if (myName) {
// //     console.log(myName ?? "enter your name")
// //!to avoid unnecessary white space
// //! FIRST check the length to see the result with whitespace
//     console.log(myName.length)
// //! now check the length after the whitespace is trimmed
//     console.log(myName.trim().length)
// //! now trim the value you want to log
//     console.log(myName.trim())
// } else {
//     console.log("You didn't enter your name")
// }

//!GAMEEEEEEEE

// let playGame = confirm("shall we play rock, paper, and scissors");
// //!check value of the playgame variable
// if (playGame) {
//     //if user agrees to play, he/she should enter any of these choices
//     let playerChoice = prompt(`Enter rock, paper or scissors.`)
//     //! check If the value entered is valid or true
//     if (playerChoice) {
//         //! if player's input holds a value, then continue to play
//         // trim value of any whitespace and change every letter to lowercase
//         let playerOne = playerChoice.trim().toLowerCase();
//         //!handling user input. if input is valid, playOne variable will be handed to the user
//         //! check if the value entered is rock, paper or scissors
//         if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
//             let computerChoice = Math.floor(Math.random() * 3 + 1)
//             let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors" ;

//             let result = 
//             playerOne === computer 
//             ? "Tie game!"
//             : playerOne === "rock" && computer === "paper"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}
//             \nComputer wins!`
//             : playerOne === "paper" && computer === "scissors"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}
//             \nComputer wins!`
//             : playerOne === "scissors" && computer === "rock"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}
//             \nComputer wins!`
//             : `playerOne: ${playerOne}\nComputer: ${computer}
//             \playerOne wins!`
//             alert(result)
//             let playAgain = confirm("Play again")
//             playAgain ? location.reload() : alert(`ok thanks for playing`)

//         } else {
//             alert(`you didn't enter rock, paper or scissors`)
//         }
//     } else {
//         //!If the input doesn't hold any value
//         alert(`I guess you changed your mind. Maybe next time`)
//     }
// } else {
//     //if user does not agree to play
//     alert(`okay, maybe next time.`)
// }

//todo  Loopssss
//? While Loops
//! initialization
// let myNumber = 0;
// //! comparison 
// while (myNumber < 50) {
//      //!increment
//      myNumber += 5;
//     //! statements
//     console.log(myNumber)
// }


//? DO While Loops
//! initialization
// let myNumber = 0;
// //! comparison 
// do {
//      //!increment
//      myNumber += 5;
//     //! statements
//     console.log(myNumber)
// } while (myNumber < 50); 

//? FOR Loops
// for (let i = 0; i<= 10; i += 5) {
//     console.log(i)
// }
//todo: For loops can also be written like this
// for (let i = 0; i<= 10;) {
//     console.log(i)
//     i += 5
// }

// let i = 0;
// for (;i<= 10;) {
//     console.log(i)
//     i += 5
// }

// let name = "Wendy";
// let i = 0;
// //! as long as i is less than the length of my name, log name and add one to the current value of i till it becomes equal to the length
// for (;i<= name.length;) {
//     console.log(name.charAt(i))
//     i++
// }

// let counter = 0;
// let myLetter;
// while (counter <= 3) {
//     myLetter = name[counter];
//     console.log(myLetter)
//     if (counter === 1) {
//         counter += 2;
//         continue;
//     }
//     //? to stop a loop
// if (myLetter === "d") break;
//     counter++;
// }
// console.log(counter)


//todo: FUNCTIONSSSSS
// FUNCTION DECLARATION SYNTAX
// function sum(num1, num2) {
//     if (num1 === undefined) {
//         return num1 + num1;
//     }
//     return num1 + num2;
// }

// console.log(sum(7));

function getUserEmail(email){
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserEmail(`tyn@hub.com`))
