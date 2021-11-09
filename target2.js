$(document).ready(function () {
    console.log("Document ready");
});

// on click event for the search button
$("#search-button").click(function () {
    getWeather();
});

// function to get the weather using open weather api
function getWeather() {
    var city_name = $("#input-box").val();

    // api call to Open weather api
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&appid=" + config.api_key;
    console.log("This is the text:", city_name)
    $.get(url, function (data, status) {
        console.log(data);

        const kelvin = data.main.temp; // retrieving the temp of the entered location (as kelvin)
        const icon = data.weather[0].icon; // retrieving the icon for the weather
        showWeather(icon, kelvin); // passing this data to the showWeather func
    });
}

// displays the relevant weather data
function showWeather(icon, kelvin) {
    // adding the relevant weather icon the dom
    $('#main__weather-results-icon').attr("src", "images/icons/" + icon + ".png");

    // temp calculations
    let celsius = kelvin - 273;
    celsius = +celsius.toFixed(2); // rounding to 2 decimal places
    $('#main__weather-results-text').text(celsius); // adding the temp text to the dom
    $('#main__weather-results-text').append("&deg;C"); // adding the degree celcius symbol  to the dom

    // animating the display of the weather icon
    $(".main__weather-results-box").animate({
        height: '200px',
    }, 300);
}