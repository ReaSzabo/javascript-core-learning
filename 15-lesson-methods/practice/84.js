/* 
  Write a JavaScript function to convert temperatures from Fahrenheit to Celsius. 
  Formula: c/5 = (f-32)/9  
    (where c = "temperature in Celsius" and f = "temperature in Fahrenheit")
  Use console log. Return is not needed.
  Expected Output:
  toCelsius(140) => "140°F is 60°C"
  toCelsius(45) => "45°F is 7.222222222222222°C"
*/

function fahrenheitToCelsius(f) {
  console.log("Celsius: " + ((f - 32) / 9) * 5);
}

fahrenheitToCelsius(140);
fahrenheitToCelsius(45);