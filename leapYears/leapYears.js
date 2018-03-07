var leapYears = function(year) {
  //This function determines whether the year is a leap year
  //If the year is divisable by 4, then it is a leap year
  if (year % 4 == 0) {
    //But if it is divisable by 100 and not divisable by 400 then it is not a leap year
    if (year % 100 == 0 && year % 400 !=0) {
      //This is not a leap year
      return false
    }
    else {
      //This is a leap year
      return true
    }
  }
  else {
    //Not divisable by 4, hence its never a leap year
    return false
  }

}

module.exports = leapYears
