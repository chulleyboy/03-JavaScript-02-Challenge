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

function generatePassword() {
  var passwordCriteria = {
    length: 0,
    hasLowercase: false,
    hasUppercase: false,
    hasNumbers: false,
    hasSpecialCharacters: false
  }
  var password =""
  var charCount = 0
  var characters = [];
  while (!(passwordCriteria.length >= 8 && passwordCriteria.length <= 128)) {
    passwordCriteria.length = prompt ("What will be the length of the password?");
    if (!(passwordCriteria.length >= 8 && passwordCriteria.length <= 128)) {
      alert ("Must be a number from 8 to 128")
    } else {
      alert ("The password will be " + passwordCriteria.length + " characters long")
    }
  }
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
  if (passwordCriteria.hasLowercase == true){
    for (var i = 97; i < 123; i++){
    characters[charCount++] = String.fromCharCode(i);
    }
  }
  if (passwordCriteria.hasUppercase == true){
    for (var i = 65; i < 91; i++){
    characters[charCount++] = String.fromCharCode(i);
    }
  }
  if (passwordCriteria.hasNumbers == true){
    for (var i = 48; i < 58; i++){
    characters[charCount++] = String.fromCharCode(i);
    }
  }
  if (passwordCriteria.hasSpecialCharacters == true){
    characters[charCount++] = "!";
    characters[charCount++] = "@";
    characters[charCount++] = "#";
    characters[charCount++] = "$";
    characters[charCount++] = "%";
    characters[charCount++] = "^";
    characters[charCount++] = "&";
    characters[charCount++] = "*";
    characters[charCount++] = "(";
    characters[charCount++] = ")";
    characters[charCount++] = "_";
    characters[charCount++] = "-";
    characters[charCount++] = "+";
    characters[charCount++] = "=";
    characters[charCount++] = "[";
    characters[charCount++] = "{";
    characters[charCount++] = "]";
    characters[charCount++] = "}";
    characters[charCount++] = ":";
    characters[charCount++] = ";";
    characters[charCount++] = "<";
    characters[charCount++] = ",";
    characters[charCount++] = ">";
    characters[charCount++] = ".";
    characters[charCount++] = "?";
    characters[charCount++] = "/";
    characters[charCount++] = "`";
    characters[charCount++] = "~";
    characters[charCount++] = "|";
    }
  for (var i = 0; i < passwordCriteria.length; i++){
    password = password + characters[Math.floor(Math.random()*(charCount-1)+0)];
  }
  return password;

}
