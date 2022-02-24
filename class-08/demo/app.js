console.log("Proof of Life!");

// var we are going to use mostly in 102
// let we are going to use if the variable is going to change values
// const we are going to use if the value will never change
  // changing values is not the same as updating a value

let userName = "Bananas";
console.log(userName);

function askTheUser() {
  // At least one dynamic component should be based on user input.
  var myName = prompt("What is your name?");
  console.log("myName: ", myName);
  
  // At least one dynamic component should use a conditional statement to determine the output.
  if (myName == 'Hexx') {
    document.write('Welcome Master of the Techincal Universe, ' + myName)
  } else {
    document.write("Welcome, " + myName)
  }
  
  let myAge = 33;
  console.log(typeof myAge);
}

// askTheUser();

// document.write(myName);

// copy/paste from app2.js
function displayPicture() {
  console.log("hello from App2.js!");
  
  // let spacePirateImg = "https://starwarsblog.starwars.com/wp-content/uploads/2017/03/darth-vader-1-cover-header.jpg";
  
  let userResponse = prompt('Do you want to see a space pirate?');
  // "YES" -> "yes"
  if (userResponse.toLowerCase() == "yes") {
    document.write('<img src="' + "https://starwarsblog.starwars.com/wp-content/uploads/2017/03/darth-vader-1-cover-header.jpg" + '">');
  if (userResponse.toLowerCase() == "no"){
    let anotherChance = prompt("are you sure????????");
    if (anotherChance.toLowerCase() == "yes") {
      document.write('<img src="' + "https://starwarsblog.starwars.com/wp-content/uploads/2017/03/darth-vader-1-cover-header.jpg" + '">');
    }
  } else {
    document.write("BOOOOOOOO!!!!!")
    }
  }
}

function picksNumbers() {
  let num1 = prompt("pick a number")
  return num1;
}


// for loop
function displayRating() {
  let output = "";
  let rating = prompt('how many stars?');
  for (let i = 0; i < rating; i++) {
    // output = output + "🌟";
    output += "🌟";
  }
  return document.write(output);
}


// while loop
// create a user guessing game
// guess a number between 1 and 100
// get some input from the user
// the correct answer
// handle incorrect guesses
// number of attempts then they lose

function guessingGame() {
  let userGuess = prompt("Please guess a number between 1 and 100...");
  let correctAnswer = 42;
  let attempts = 4;

  for (let i = 0; i < attempts; i++) {
    while (userGuess < 1 || userGuess > 100) {
      userGuess = prompt("Please try again...! A number between 1 and 100");
    }
    if (userGuess == correctAnswer) {
      alert('DING DING DING!! We have ourselves a WINNER!');
      document.write("Game Winner!");
      break;
    } else if (userGuess > correctAnswer) {
      userGuess = prompt("Sorry, too high!! Please try to guess lower...");
    } else if (userGuess < correctAnswer) {
      userGuess = prompt("Sorry, too low!! Please try to guess a bit higher...");
    }
    if (i == 3) {
      alert("The correct answer was " + correctAnswer);
      document.write("Game Loser!");
    }
  }
}