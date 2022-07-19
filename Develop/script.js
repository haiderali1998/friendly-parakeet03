// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a random integer from the arrays
function randomInt(list) {
  console.log(list)
  return Math.floor(Math.random() * list.length)

}


// Give us a random position in the list
function GetRandomItem(list) {
  console.log(list)
  var random = list[randomInt(list)]
  var randomChar = random[randomInt(random)]
  console.log(random)
  console.log(randomChar)
  return randomChar
}

function generatePassword() {
  console.log("button clicked");

  //prompt user for password citeria
  var userInfo = window.prompt("How many charecters do you want?")
  console.log(userInfo)

  // Password length 8 < 128
  var passwordLength = parseInt(userInfo)

  //Alert if information is not a number, I used NaN
  if (isNaN(passwordLength)) {
    alert("Please input a number")
    generatePassword()
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must choose between 8 - 128 charecters!")
  }

  //I will now ask the user to conirm the parameters of the password in order to meet the acceptance criteria.

  var numbers = window.confirm("Click okay if you will include any numbers.")
  console.log(numbers)
  var special = window.confirm("Click okay if you will include any Special Charecters.")
  console.log(special)
  var upper = window.confirm("Click okay if you will include any uppercase letters.")
  console.log(upper)
  var lower = window.confirm("Click okay if you will include any lower case letters.")
  console.log(lower)

  if (numbers === false && special === false && upper === false && lower === false) {
    alert("Please select atleast one charecter type!")
    return null;
  }

  //Arrays for charecters that will be used from the generated password
  var numbersGenerated = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  console.log(numbersGenerated)
  var specialGenerated = ["!", "%", "&", ",", "*", "]", "`", "¬", "|", "+", "-", ".", "/", "<", ">", "?", "~", "£", "$", "^", "@",];
  console.log(specialGenerated)
  var lowerGenerated = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  console.log(lowerGenerated)
  var upperGenerated = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  console.log(upperGenerated)

  //Inputing the charecter type when the user selects what is needed to be generated

  var charecterType = []

  if (numbers === true) {
    charecterType.push(numbersGenerated)
  }

  if (special === true) {
    charecterType.push(specialGenerated)
  }

  if (lower === true) {
    charecterType.push(lowerGenerated)
  }

  if (upper === true) {
    charecterType.push(upperGenerated)
  }
  console.log(charecterType)

  var passwordString = []

  for (var i = 0; i < passwordLength; i++) {

    var randomList = GetRandomItem(charecterType)
    passwordString.push(randomList)

    //var randomCharecter = GetRandomItem
    //generatePassword += randomCharecter

  }
  console.log(passwordString)
  return passwordString.join('')

}

//if user hits no, prompt need to select item




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
