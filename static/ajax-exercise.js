"use strict";


// PART 1: SHOW A FORTUNE


function replaceFortune(results){
    var fortune = results;

    $('#fortune-text').html(fortune);
    console.log("Finished");
}

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    evt.preventDefault();

    $.get('/fortune',replaceFortune);
    console.log("Finished Sending AJAX");
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function getWeather(results) {
    // console.dir(results);
    $('#weather-info').html(results['forecast']);
    console.log(results['forecast']);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url,formData,getWeather);
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);



//fy({'code': result_code, 'msg': result_text})
// PART 3: ORDER MELONS

function order(results){
    console.log(results)
    alert(results['code', 'msg']);
}

function orderMelons(evt) {
    evt.preventDefault();

    let formData = {'qty': $('#qty-field').val(),
                    'melon_type': $('#melon-type-field').val()};

    $.post("/order-melons.json", formData, order);
    console.log("Finished Sending AJAX");

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


