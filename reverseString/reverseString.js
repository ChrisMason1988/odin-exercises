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

module.exports = reverseString
