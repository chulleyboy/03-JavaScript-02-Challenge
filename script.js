// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//creates promps for user to specify parameters then generates password
function generatePassword() {
  var passwordCriteria = {
    length: 0,
    hasLowercase: false,
    hasUppercase: false,
    hasNumbers: false,
    hasSpecialCharacters: false
  }
  //variable for writing the password
  var password =""
  //array of all characters that are allowed within the password
  var characters = [];
  //repeats the password length prompt until the under gives a valid answer
  while (!(passwordCriteria.length >= 8 && passwordCriteria.length <= 128)) {
    passwordCriteria.length = prompt ("What will be the length of the password?");
    if (!(passwordCriteria.length >= 8 && passwordCriteria.length <= 128)) {
      if (passwordCriteria.length == null){
        return "";
      }
      else {
        alert ("Must be a number from 8 to 128")
      }
    } else {
      alert ("The password will be " + passwordCriteria.length + " characters long")
    }
  }
  //repeats the character used prompts until the user specifies at least one type of character to use
  while (passwordCriteria.hasLowercase == false && passwordCriteria.hasUppercase == false && passwordCriteria.hasNumbers == false && passwordCriteria.hasSpecialCharacters == false) {
    passwordCriteria.hasLowercase = confirm ("Will the password include lowercase characters?");
    if (passwordCriteria.hasLowercase == true){
      alert ("Lowercase characters will be included in the password")
    } else {
      alert ("Lowercase characters will not be included in the password")
    }
    passwordCriteria.hasUppercase = confirm ("Will the password include uppercase characters?");
    if (passwordCriteria.hasUppercase == true){
      alert ("Uppercase characters will be included in the password")
    } else {
      alert ("Uppercase characters will not be included in the password")
    }
    passwordCriteria.hasNumbers = confirm ("Will the password include numbers?");
    if (passwordCriteria.hasNumbers == true){
      alert ("Numbers characters will be included in the password")
    } else {
      alert ("Numbers characters will not be included in the password")
    }
    passwordCriteria.hasSpecialCharacters = confirm ("Will the password include special characters?");
    if (passwordCriteria.hasSpecialCharacters == true){
      alert ("Special characters will be included in the password")
    } else {
      alert ("Special characters will not be included in the password")
    }
    if (passwordCriteria.hasLowercase == false && passwordCriteria.hasUppercase == false && passwordCriteria.hasNumbers == false && passwordCriteria.hasSpecialCharacters == false) {
      alert ("Must include at least 1 type of character")
    }
  }
  //add lowercase characters the characters array if the user wanted them
  if (passwordCriteria.hasLowercase == true){
    for (var i = 97; i < 123; i++){
    characters[characters.length] = String.fromCharCode(i);
    }
  }
    //add uppercase characters the characters array if the user wanted them
  if (passwordCriteria.hasUppercase == true){
    for (var i = 65; i < 91; i++){
    characters[characters.length] = String.fromCharCode(i);
    }
  }
    //add numbers the characters array if the user wanted them
  if (passwordCriteria.hasNumbers == true){
    for (var i = 48; i < 58; i++){
    characters[characters.length] = String.fromCharCode(i);
    }
  }
    //add special characters the characters array if the user wanted them
  if (passwordCriteria.hasSpecialCharacters == true){
    characters[characters.length] = "!";
    characters[characters.length] = "@";
    characters[characters.length] = "#";
    characters[characters.length] = "$";
    characters[characters.length] = "%";
    characters[characters.length] = "^";
    characters[characters.length] = "&";
    characters[characters.length] = "*";
    characters[characters.length] = "(";
    characters[characters.length] = ")";
    characters[characters.length] = "_";
    characters[characters.length] = "-";
    characters[characters.length] = "+";
    characters[characters.length] = "=";
    characters[characters.length] = "[";
    characters[characters.length] = "{";
    characters[characters.length] = "]";
    characters[characters.length] = "}";
    characters[characters.length] = ":";
    characters[characters.length] = ";";
    characters[characters.length] = "<";
    characters[characters.length] = ",";
    characters[characters.length] = ">";
    characters[characters.length] = ".";
    characters[characters.length] = "?";
    characters[characters.length] = "/";
    characters[characters.length] = "`";
    characters[characters.length] = "~";
    characters[characters.length] = "|";
    }
    //constructures the password using random characters from the characters array
  for (var i = 0; i < passwordCriteria.length; i++){
    password = password + characters[Math.floor(Math.random()*(characters.length))];
  }
  return password;

}
