$(function () {

});

function initSliders() {
    console.log('calculator logic started');
    // Handler for .ready() called.
    $("#slider1").slider({
        min: 0,
        max: 500,
        value: 196,
        step: 9.8
    });

    $("#slider2").slider({
        min: 0,
        max: 500,
        value: 196,
        step: 12.19
    });

    $("#slider3").slider({
        min: 0,
        max: 700,
        value: 263,
        step: 87.5
    });

    $("#slider4").slider({
        min: 0,
        max: 1500,
        value: 1500,
        step: 53.57
    });

    $('#slider1').on('slidestop', calculate);
    $('#slider2').on('slidestop', calculate);
    $('#slider3').on('slidestop', calculate);
    $('#slider4').on('slidestop', calculate);

    calculate();
}

function calculate() {
    var value1 = Math.round($("#slider1").slider("value"));
    var value2 = Math.round($("#slider2").slider("value"));
    var value3 = Math.round($("#slider3").slider("value"));
    var value4 = Math.round($("#slider4").slider("value"));

    var range1 = $("#slider1").slider("option", "max") - $("#slider1").slider("option", "min");
    var range2 = $("#slider2").slider("option", "max") - $("#slider2").slider("option", "min");
    var range3 = $("#slider3").slider("option", "max") - $("#slider3").slider("option", "min");
    var range4 = $("#slider4").slider("option", "max") - $("#slider4").slider("option", "min");


    var range_natur1 = 60 - 10; //50
    var value_natur1 = Math.round(( value1 / range1 ) * range_natur1 + 10);

    var range_natur2 = 70 - 30; //40
    var value_natur2 = Math.round(( value2 / range2 ) * range_natur2 + 30);

    var range_natur3 = 7 - 1; //6
    var value_natur3 = Math.round(( value3 / range3 ) * range_natur3 + 1);

    var range_natur4 = 30 - 3; //27
    var value_natur4 = Math.round(( value4 / range4 ) * range_natur4 + 3);


    var total = value1 + value2 + value3 + value4;
    $('#price_amount').text(total + ' грн');

    console.log(value4);

    $('#slider1_value').text(value_natur1 + ' мин, ' + value1);
    $('#slider2_value').text(value_natur2 + ' шт ' + value2);
    $('#slider3_value').text(value_natur3 + ' мин ' + value3);
    $('#slider4_value').text(value_natur4 + ' дн ' + Math.abs(value4 - 2000));
}