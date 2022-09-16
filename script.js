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
const upperCase = "QWRTYUIOPASDFGHJKLZCVBNM";
const lowerCase = "qwertyuioplkjhgfdsamnbvcxz";
const numeric = "1234567890";
const specialChar = "`~!@#$%^&*()-_=+][}{':;><,.?";
function generatePassword(){
    let length = 0;
    let passtext= "";
    while (length < 8 || length > 128){
        length = (parseInt(prompt("How long would you like the password?(8-129 characters)")));
        if (length > 7 && length < 129){
            break;
        }
        alert("Please enter a number between 8-128");
    } 
    let capital = confirm("Would you like Uppercase letters?");
    let lower = confirm("Would you like lower case letters?");
    let num = confirm("Would you like numbers?");
    let special= confirm("Would you like special characters?");
    let bank="";
    if(capital && lower && num && special){
       bank = upperCase.concat(lowerCase, numeric, specialChar);
    }
    else if(lower && num && special){
       bank= lowerCase.concat(numeric, specialChar);
    }
    else if(capital && num && special){
        bank = upperCase.concat( numeric, specialChar);
    }
    else if(capital && lower && special){
        bank = upperCase.concat(lowerCase, specialChar);
    }
    else if(capital && lower && num){
        bank = upperCase.concat(numeric, lowerCase);
    }
    else if(capital && lower){
        bank = upperCase.concat(lowerCase);
    }
    else if(capital && num){
        bank = upperCase.concat(numeric);
    }
    else if( capital&&special){
        bank = upperCase.concat(specialChar);
    }
    else if(lower && num){
        bank = numeric.concat(lowerCase);
    }
    else if(lower && special){
        bank = specialChar.concat(lowerCase);
    }
    else if(num && special){
        bank = numeric.concat(specialChar);
    }
    else if(capital){
        bank = upperCase;
    }
    else if(lower){
        bank = lowerCase;
    }
    else if(special){
        bank =specialChar;
    }
    else if(num){
        bank =numeric;
    }
    
    for (var i = 0; i < length; i++){
        passtext += bank.charAt(Math.floor(Math.random() * bank.length));
    }
    console.log(bank);
    console.log(passtext);
    return passtext;
    }
