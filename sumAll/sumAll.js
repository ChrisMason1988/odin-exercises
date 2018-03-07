var sumAll = function(start,end) {
  //This function sums all the number between start and end
  //If either start or end isnt a number, exit with ERROR
  if (typeof start != "number" || typeof end != "number") {
    return "ERROR"
  }
  //Check to see if start and end are greater than or equal to 0
  if (start < 0 || end < 0) {
    return "ERROR"
  }
  //If start is greater than end, swap them over
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  //Adding all numbers between start and end
 var result = 0;
  for (i=start; i<=end; i++){
    result = result + i;
  }
  return result
}

module.exports = sumAll
