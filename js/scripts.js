// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// alert(add(number1, number2));

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

// User interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event){
  event.preventDefault();
  //Add
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);

    $("#output").text(result);
  });
  //subtract
  $("form#subtract").submit(function(event){
  event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);

    $("#output").text(result);
  });
  //multiply
  $("form#multiply").submit(function(event){
  event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);

    $("#output").text(result);
  });
  //divide
  $("form#divide").submit(function(event){
  event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);

    $("#output").text(result);
  });
});
