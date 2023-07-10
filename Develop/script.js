// Character types

var passwordText = document.querySelector("#password");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = "`~!@#$%^&*()-=_+[]{};':,./<>?";

var length = prompt("Please enter a number between 8 and 128. This will be your password's length.");
  if (length > 128){
    length = 128
  }
  if (length < 8){
    length = 8
  }
var combChar = upperCase + lowerCase + number + special;


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += special[Math.floor(Math.random() * special.length)];

  while(length > password.length){
    password += combChar[Math.floor(Math.random() * combChar.length)];
  }
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
