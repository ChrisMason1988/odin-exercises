var removeFromArray = function(inputArray) {
 for (i=1; i<arguments.length; i++) {
   for (j=0; j<inputArray.length; j++) {
     if (arguments[i] === inputArray[j]) {
       inputArray.splice (j,1)
     }
   }
 }
 return inputArray
}

module.exports = removeFromArray
