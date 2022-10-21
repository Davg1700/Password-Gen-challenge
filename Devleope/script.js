// Assignment Code
var generateBtn = document.querySelector("#generate");

// function 
  function generatePassword(){
    //char vars
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var specialChar = '!@#$%^&*_-+=';
  
    //setting password length
    var passwordLenght = prompt('set password let from 8 to 128 please');
    
    //ensuring pass feilds are correct
    if(!passwordLenght){
      //restars if user hits cancel
        alert("Hit the start button to start again") 
        return;
      //checking if its a valid entry
    } else if(passLength < 8 || passLength > 129) {
        alert("You have entered an invaled entry.")
        return; 
    }
  
    for (let i = 0; i < passwordLenght; i++){
      let randomNumber = Math.floor(Math.random()
      *chars.length);
  
      password += chars.substring(randomNumber, randomNumber + 10);
      console.log(password);
      //displaypass
      return password;
    }
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);