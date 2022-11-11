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
  while (passwordCriteria.length < 1 || passwordCriteria.length > 128 || isint(passwordCriteria.length) == false) {
    passwordCriteria.length = prompt ("What will be the length of the password?");
    if (passwordCriteria.length < 1 || passwordCriteria.length > 128 || isint(passwordCriteria.length) == false) {
      alert ("Length must be a number from 8 to 128")
    } else {
      alert ("The password will be " + passwordCriteria.length + " characters long")
    }
  }
return "password";
}
