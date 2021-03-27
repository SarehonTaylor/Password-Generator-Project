//Assigment Code
var specialCharacters =["!","@","#","$","%","^","&","*"]
var numericCharacters =["1","2","3","4","5","6","7","8","9"]
var lowerCaseCharacters =["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCaseCharacters =["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"]



//Password Code
function PasswordOptions() {

var length = parseInt(prompt("How Many Characters Would You Like Your Password To Be? (Password Must Be 8-128 Characters Long"))   

if (isNaN(length)===true){
    alert("Password Length Must Be Numeric")
    return
}
if (length < 8){
    alert("Password Length Must Be At Least 8 Characters")
    return
}
if (length > 128){
    alert("Password Length May Not Be More Than 128 Characters Long")
    return
}

var isspecialCharacters= confirm("Please Click Ok To Use The Special Charactors")
var isnumericCharacters= confirm("Please Click Ok To Use The Numeric Charactors")
var islowerCharacters= confirm("Please Click Ok To Use The LowerCase Charactors")
var isupperCharacters= confirm("Please Click Ok To Use The UpperCase Charactors")


if (isspecialCharacters===false && isnumericCharacters===false && islowerCharacters===false && isupperCharacters===false){
    alert("You Must Select At Least One Of The Charactors To Create A Password")
   return
}
var passwordChoices= {
    length:length,
    isspecialCharacters:isspecialCharacters,
    isnumericCharacters:isnumericCharacters,
    islowerCharacters:islowerCharacters,
    isupperCharacters:isupperCharacters,
}
 
 return passwordChoices
}

function random(arr){

    var randomindex = Math.floor(Math.random() * arr.length)
    var randomelement = arr[randomindex]
    return randomelement 
}

function generatePassword(){
var Choices = PasswordOptions()
if (!Choices) return
var result = [] 
var Possible = []
var Guarentee = []
    if (Choices.isspecialCharacters){
        Possible = Possible.concat(specialCharacters)
        Guarentee.push(random(specialCharacters))
    }

    if (Choices.isnumericCharacters){
        Possible = Possible.concat(numericCharacters)
        Guarentee.push(random(numericCharacters))
    }
   
    
    if (Choices.islowerCharacters){
        Possible = Possible.concat(lowerCaseCharacters)
        Guarentee.push(random(lowerCaseCharacters))
    }
       
        
    if (Choices.isupperCharacters){
        Possible = Possible.concat(upperCaseCharacters)
        Guarentee.push(random(upperCaseCharacters))
    }
        
            
    for (var i = 0; i < Choices.length; i++ ){
        var pos = random(Possible)
        result.push(pos)
    }

    for (var i = 0; i < Guarentee.length; i++ ) {
        result[i] = Guarentee[i] 
    }
    
    return result.join("")


}                 

var generateBtn = document.querySelector("#generate");
//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    if (password) passwordText.value = password;

}

// Add event lister to generate button
generateBtn.addEventListener("click", writePassword);














//IDEAS ON PASSWORD GENERATOR
// Ranrom Password Generator Functions
// function getRandomUpper() }
// return String.fromCharCode(Math.floor(math.random() * 26) + 65;
// }

// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

// }
// function getRandomSymbol() {
//     const symbols = '!@#$%^&*()_+';
//     return symbols[Math.floor(math.random() * symbols.length)];
// }
// }