
var passwordText = document.querySelector("#password");

// Character types
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = "`~!@#$%^&*()-=_+[]{};':,./<>?";

// pw length, no greater than 128 no less than 8
var length = prompt("Please enter a number between 8 and 128. This will be your password's length.");
  if (length > 128){
    length = 128
  }
  if (length < 8){
    length = 8
  }

// combined character types
var ucSelect = prompt("Would you like to use uppercase characters? Enter Y or N.");
var lcSelect = prompt("Would you like to use lowercase characters? Enter Y or N.");
var numSelect = prompt("Would you like to use numbers? Enter Y or N.");
var specSelect = prompt("Would you like to use special characters? Enter Y or N.");

combChar = upperCase + lowerCase + number + special

if (ucSelect === "Y" && lcSelect === "Y" && numSelect === "Y" && specSelect === "Y"){
  combChar = upperCase + lowerCase + number + special
}
else if (ucSelect === "N" && lcSelect === "Y" && numSelect === "Y" && specSelect === "Y"){
  combChar = lowerCase + number + special
}
else if (ucSelect === "N" && lcSelect === "N" && numSelect === "Y" && specSelect === "Y"){
  combChar = number + special
}
else if (ucSelect === "N" && lcSelect === "N" && numSelect === "N" && specSelect === "Y"){
  combChar = special
}

// none selected

else if (ucSelect === "N" && lcSelect === "N" && numSelect === "N" && specSelect === "N"){
  function generatePassword(){
    let password = "VERY FUNNY! HILARIOUS!";
    
    passwordText.value = password;
  }
}

// single types

else if (ucSelect === "Y" && lcSelect === "N" && numSelect === "N" && specSelect === "N"){
  combChar = upperCase
}
else if (ucSelect === "N" && lcSelect === "Y" && numSelect === "N" && specSelect === "N"){
  combChar = lowerCase
}
else if (ucSelect === "N" && lcSelect === "N" && numSelect === "Y" && specSelect === "N"){
  combChar = number
}
else if (ucSelect === "N" && lcSelect === "N" && numSelect === "N" && specSelect === "Y"){
  combChar = special
}

// the rest?

else if (ucSelect === "Y" && lcSelect === "Y" && numSelect === "N" && specSelect === "N"){
  combChar = upperCase + lowerCase
}
else if (ucSelect === "Y" && lcSelect === "Y" && numSelect === "Y" && specSelect === "N"){
  combChar = upperCase + lowerCase + number
}
else if (ucSelect === "Y" && lcSelect === "N" && numSelect === "Y" && specSelect === "N"){
  combChar = upperCase + number
}
else if (ucSelect === "Y" && lcSelect === "N" && numSelect === "N" && specSelect === "Y"){
  combChar = upperCase + special
}
else if (ucSelect === "N" && lcSelect === "Y" && numSelect === "Y" && specSelect === "N"){
  combChar = lowerCase + number
}
else if (ucSelect === "N" && lcSelect === "Y" && numSelect === "N" && specSelect === "Y"){
  combChar = lowerCase + special
}



function generatePassword(){
  let password = "";
  while(length > password.length){
    password += combChar[Math.floor(Math.random() * combChar.length)];
  }
  
  passwordText.value = password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
