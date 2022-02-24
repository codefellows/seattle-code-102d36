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


function picksNumbers() {
  let num1 = prompt("pick a number")
  return num1;
}

// picksNumbers();

// console.log("num1: ", num1);