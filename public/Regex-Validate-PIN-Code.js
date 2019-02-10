//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.

//eg:

//validatePIN("1234") === true
//validatePIN("12345") === false
//validatePIN("a234") === false

//Solution I am working on
//I need to iterate throught the string & push the characters into an array to 
//determine if the character is anything other than a number

//Passes 2/3s:
//Pin false if not 4 or 6
//Pin false if not a number
//Does not pass if PIN is true

function validatePIN (pin) {
  //return true or false
  
  if (pin.length !== 4 || pin.length !== 6) {
  return false
  } else if (typeof pin === 'number') {
  return false
  } else {
  return true
  } 
}