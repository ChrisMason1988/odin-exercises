var repeatString = function(inputString, numRepeat) {
 let outputString = "";
 if (numRepeat<0) {
   return "ERROR";
 }
 for (let i=0; i < numRepeat; i++) {
   outputString = outputString + inputString;
 }
 return outputString;
}

module.exports = repeatString
