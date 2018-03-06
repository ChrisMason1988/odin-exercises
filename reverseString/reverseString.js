var reverseString = function(inputString) {
 let outputString = "";
 let i=inputString.length -1;
 while (i>=0) {
   outputString = outputString + inputString.charAt (i);
   i--;
 }
 return outputString
}

module.exports = reverseString
