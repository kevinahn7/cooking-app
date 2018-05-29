var convert = function() {
  return liters * .264;
}

var liters = parseInt(prompt("Enter the amount of Liters you would like to convert to gallons:"));

alert(convert(liters));
