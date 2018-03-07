var repeatString = function(inputString, numRepeat) {
  //This function repeats the inputString numRepeat times
 let outputString = "";
 //Checking the number of repeats are greater than 0
 if (numRepeat<0) {
   return "ERROR";
 }
 //Loop through adding the inputString to outputString numRepeat times
 for (let i=0; i < numRepeat; i++) {
   outputString = outputString + inputString;
 }
 return outputString;
}

module.exports = repeatString
