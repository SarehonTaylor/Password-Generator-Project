//Assigment Code
var specialCharacters =["!","@","#"]
var numericCharacters =["1","2","3"]
var lowerCaseCharacters =["a","b","c"]
var upperCaseCharacters =["A","B","C"]
var generateBtn = document.querySelector("#generate");


//Password Code
function PasswordOptions() {
    while (true) {
var length = parseInt(prompt("How Many Characters Would You Like Your Password To Be? (Password Must Be 8-12 Characters Long"))   

if (isNaN(length)===true){
    alert("Password Length Must Be Numeric")
    continue
}
if (length < 8){
    alert("Password Length Must Be At Least 8 Characters")
    continue
}
if (length > 128){
    alert("Password Length May Not Be More Than 128 Characters Long")
    continue
}

var isspecialCharacters= confirm("Please Click Ok To Use The Special Charactors")
var isnumericCharacters= confirm("Please Click Ok To Use The Numeric Charactors")
var islowerCharacters= confirm("Please Click Ok To Use The LowerCase Charactors")
var isupperCharacters= confirm("Please Click Ok To Use The UpperCase Charactors")

if (isspecialCharacters===false && isnumericCharacters===false && islowerCharacters===false && isupperCharacters===false){
    alert("You Must Select At Least One Of The Charactors To Create A Password")
    continue
}
var passwordChoices= {
    length:length,
    isspecialCharacters:isspecialCharacters,
    isnumericCharacters:isnumericCharacters,
    islowerCharacters:islowerCharacters,
    isupperCharacters:isupperCharacters,
}
return passwordChoices }
}

function random(arr){

    var randomindex=Math.floor(Math.random()* arr.length)
    var randomelement=arr[randomindex]
   return randomelement 
}

function generatePassword(){
var Choices = PasswordOptions()
var Possible = []
var Guarentee = []
if (Choices.isspecialCharacters){
    Possible=Possible.concat(specialCharacters)
    Guarentee.push(random(specialCharacters))
}
} 



function greaterNumber() {


}
//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    passwordText.value = password;

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