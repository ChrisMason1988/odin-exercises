var reverseString = function(inputString) {
  //This function reverses the inputString
 let outputString = "";
 //Start at the end of the string
 let i=inputString.length -1;
 //Work backwards through the string, copying it to outputString
 while (i>=0) {
   outputString = outputString + inputString.charAt (i);
   i--;
 }
 return outputString
}
// Checking whether a string is a Palindrome.
var palindromes = function(inputString) {
  // Convert it all to the same case.
    var forwardString = inputString.toLowerCase();
    // Remove special characters.
    forwardString = forwardString.replace(/[.,\/#!$%\^&\*;:{}=\-_ `~()]/g,"");
    // Create a backwards version of it.
    var backwardString = reverseString(forwardString);
    // Compare the forwards version and backwards version. If same return true.
    if (backwardString == forwardString) {
      return true
    }
    else {
      return false
    }
}

module.exports = palindromes
