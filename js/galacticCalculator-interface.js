import {GalacticCalculator} from './../js/GalacticCalculator.js';

$(document).ready(function() {
  $('#date-input-form').submit(function(event) {
    event.preventDefault();
    let date = new Date($("#date-input").val());
    let calculator = new GalacticCalculator(date);
    $('#mercury').text(calculator.mercuryYears());
    $('#venus').text(calculator.venusYears());
    $('#mars').text(calculator.marsYears());
    $('#jupiter').text(calculator.jupiterYears());

  });
});
