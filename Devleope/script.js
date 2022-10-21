// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    //cahraters for each value type
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var specialChar = '!@#$%^&*_-+=';

    // Allows user to input password length 
    var passLength = prompt("Set your password length(8 - 128).");

    //ensures for vaild entry
    if(!passLength){
      //alows user to try again
        alert("try again.") 
        return;
      // ensure user sets corect values
    } else if(passLength < 8 || passLength > 129) {
      alert("Entered an invaild entry try again.")
      return; 
    }
  

    // cahrater select prompts
    var lowerCaseSelect = confirm("Would you like lower case chars select confirm for yes cancle for no.")
    var upperCaseSelect = confirm("Would you like upper case chars select confirm for yes cancle for no.")
    var numberSelect = confirm("Would you like number values select confirm for yes cancle for no.")
    var specialSelect = confirm("Would you like special chars select confirm for yes cancle for no.")
    
    //ensures 1 charater is selected
    if(!lowerCaseSelect && !upperCaseSelect && !numberSelect && !specialSelect){
      alert("Selecet at leset 1 charater.")
      return;
    }

    // user selections for password

    if(lowerCaseSelect){
      var lowerCaseSelectConfirm = "Yes";
    } else {
      var lowerCaseSelectConfirm = "No";
      lowerCase = '';
    }

    if(upperCaseSelect){
      var upperSelectConfirm = "Yes";
    } else {
      var upperSelectConfirm = "No";
      upperCase = '';
    }

    if(numberSelect){
      var numberSelectConfirm = "Yes";
    } else {
      var numberSelectConfirm = "No";
      numbers = '';
    }

    if(specialSelect){
      var specialSelectConfirm = "Yes";
    } else {
      var specialSelectConfirm = "No";
      specialChar = '';
    }

    // comfim promt for user to ensure their password has selected feilds they chose
    var passConfirm = confirm("These are your selected parameters: \n Password Length: " + passLength + "\n Lower Case: " + lowerCaseSelectConfirm + "\n Upper Case: " + upperSelectConfirm + "\n Numbers: " + numberSelectConfirm + "\n Special Characters: " + specialSelectConfirm + "\nIf you'd like to proceed, press ok.");

    //lets user start again to with selection from begining
    if(!passConfirm){
      alert("Please start again.");
      return;
    }

    //new password with selected feilds
    var newPass = lowerCase + upperCase + numbers + specialChar;
    //password
    var password = ''

    //random pass word gen with entered entry
    for ( var i = 0; i < passLength; i++ ) {
      password += newPass.charAt(Math.floor(Math.random() * newPass.length)); 
    }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

