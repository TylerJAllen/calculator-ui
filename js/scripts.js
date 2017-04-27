// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var modulo = function(number1, number2) {
  return number1 % number2;
};

// User interface (or front-end) logic:

$(document).ready(function() {
  $("form#calc").submit(function(event){
  event.preventDefault();
  //Calculate!!!!
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var sum = add(number1, number2);
    var difference = subtract(number1, number2);
    var product = multiply(number1, number2);
    var quotient = divide(number1, number2);
    var remainder = modulo(number1, number2);

    if (operator === "add") {
      $("#output").text(sum);
    }
    else if (operator === "subtract"){
      $("#output").text(difference);
    }
    else if (operator === "multiply"){
      $("#output").text(product);
    }
    else if (operator === "divide"){
      $("#output").text(quotient);
    }
    else if (operator === "modulo"){
      $("#output").text(remainder);
    }
  });
});
