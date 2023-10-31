// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Function to check characters length
function checkPasswordLength(length){
  //Check if its valid and return boolean
  if(length < 8){
    alert("Password must be atleast 8 characters long.");
    return false;
  } else if (length > 128){
    alert("Password must be less than 128 characters.");
    return false;
  } else {
    //alert("Test Pass");
    return true;
  }
}

//Function to ask Character types
function askCharacterTypes(passOptions){
  //First prompt
  passOptions.lowercase = confirm("Would you like to include lowercase characters in your passsword?");
  passOptions.uppercase = confirm("Would you like to include uppercase characters in your passsword?");
  passOptions.numeric = confirm("Would you like to include numeric characters in your passsword?");
  passOptions.specialChar = confirm("Would you like to include Special characters ($@%&*, etc) in your passsword?");

  //Check if atleast one character is selected
  if (passOptions.lowercase || passOptions.uppercase || passOptions.numeric || passOptions.specialChar){
    return passOptions;
  } else {
    alert("Please select atleast one character type.");
    return false;
  }
  
}

// Function to prompt user for password options
function getPasswordOptions() {
  let passOptions = {
    lowercase: false,
    uppercase: false,
    numeric: false,
    specialChar: false,
    passwordLength: 0
  }

  //Ask passwords character length 
  passOptions.passwordLength = prompt("How many characters would you like your password to be?");

  //Check if the user input is valid - Function is declared above
  if (checkPasswordLength(passOptions.passwordLength)){
    // IF password lemgth is valid
    //Ask for Character types
    if(askCharacterTypes(passOptions) !== false){ // If false is not returned
      // Return the final password option object to generate password;
      return passOptions;
      //console.log("Options" + JSON.stringify(passOptions));
    }  
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  //This function gets an array of mixed choices
}

// Function to generate password with user input
function generatePassword() {
  let passwordOptions = getPasswordOptions();
  //This variable has the password length and the character options
  

  //if password length is 20 charcters
      //passwordOptions.passwordlength
      //Create a new variable for genrating poassword

  //get the length of character types (ex: 4) 
    //passwordOptions.passwordlength

  //  20/4 = 5 // Math.celi -> confirm that total character length is equal to 20 again after rounding up

  // when I concat those arrays together, randomise them again


}


/// DONT TOUCH THE CODE BELOW

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);