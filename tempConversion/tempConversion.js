var ftoc = function(fahrenheit) {
  //Converts fahrenheit to celsius
  let celsius;
  //Subtract 32 then multiply by 5 over 9
  celsius = (fahrenheit - 32) * 5/9;
  //Then round to 1 decimal place
  celsius = Math.round (celsius * 10) / 10;
  return celsius
}

var ctof = function(celsius) {
  //Converts celsius to fahrenheit
  let fahrenheit;
  //Multiply by 9 over 5 then add 32
  fahrenheit = (celsius * 9/5) + 32;
  //Then round to 1 decimal place
  fahrenheit = Math.round (fahrenheit * 10) / 10;
  return fahrenheit
}

module.exports = {
  ftoc,
  ctof
}
