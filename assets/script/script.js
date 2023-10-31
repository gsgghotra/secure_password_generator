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

  if(passOptions.passwordLength){
  
  //Check if the user input is valid - Function is declared above
  if (checkPasswordLength(passOptions.passwordLength)){
    // IF password length is valid
    //Ask for Character types
    if(askCharacterTypes(passOptions) !== false){ // If false is not returned from characters
      // Return the final password option object to generate password;
      return passOptions;
      //console.log("Options" + JSON.stringify(passOptions));
    }  
  }
}
}

//Function to get multiple random numbers from each array
function multipleRandom(arr, num) {
  //Sort the array 
  const shuffled = [...arr].sort(() => 0.5 - Math.random()); //ES6+ shorthand
  return shuffled.slice(0, num); //Slice from 0 to required numbers and return
}


// Function for getting a random element from an array
function getRandom(options) {
  //This function gets the length of password and options as parameter(object)

    //get the length of character types (ex: 4) 
  let countofOptions = [options.lowercase, options.uppercase, options.numeric, options.specialChar].filter(Boolean).length;
  //Divide the password length with no of character type options - //Round up if result isn't integer
  let characterNeeded = Math.ceil(options.passwordLength / countofOptions);

  //New Array to save answers
  let randomHolder = [];

  //Get Randomisers
  if(options.lowercase){
    //Push the random numbers into array
    randomHolder.push(multipleRandom(lowerCasedCharacters, characterNeeded));
  }
  if(options.uppercase){
    //Push the random numbers into array
    randomHolder.push(multipleRandom(upperCasedCharacters, characterNeeded));
  }
  if(options.numeric){
    //Push the random numbers into array
    randomHolder.push(multipleRandom(numericCharacters, characterNeeded));
  }
  if(options.specialChar){
    //Push the random numbers into array
    randomHolder.push(multipleRandom(specialCharacters, characterNeeded));
  }


  //Shuffle the array to generate random password
  //also confirm that total character length is equal to 20 again after rounding up
  let randomPassword = multipleRandom(randomHolder.flat(), options.passwordLength);

  //Remove commas by using
  randomPassword = randomPassword.join("")

  // when I concat those arrays together, randomise them again
  return randomPassword;
}

// Function to generate password with user input
function generatePassword() {
  //The return of getPasswordOptions is the argumenta of getRandom 
  return getRandom(getPasswordOptions());
  
  //Return the password here
  return options.passwordLength;
}

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