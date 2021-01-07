mapboxgl.accessToken = mapBoxToken;

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function (res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function (data) {
            return data.features[0].center;
        });
}

var result=[-98.4916, 29.4252]
let latitude = result[0]
let longitude = result[1]
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: openWeatherToken,
    lat: longitude,
    lon: latitude,
    units: "imperial"
}).done(function (data) {
    console.log(data)
    var weatherObj = {}
    for (var i = 0, j = 0; i < 40; i = i + 8, j++) {
        weatherObj[j] = {}
        weatherObj[j].tempMin = data.list[i].main.temp_min
        weatherObj[j].tempMax = data.list[i].main.temp_max
        weatherObj[j].description = data.list[i].weather[0].description
        weatherObj[j].wind = data.list[i].wind.speed
        weatherObj[j].pressure = data.list[i].main.pressure
        weatherObj[j].humidity = data.list[i].main.humidity
        weatherObj[j].date = data.list[i].dt_txt
        weatherObj[j].icon = data.list[i].weather[0].icon
    }
    console.log(weatherObj)
    var cards = $(".card-deck").children()
    for (var i = 0; i < cards.length; i++) {
        let card = cards[i];
        card.innerHTML = '<div class="card-header">' + weatherObj[i].date.split(" ")[0] + '</div>' +
            "<ul class=\"list-group list-group-flush\">\n" +
            "            <li class=\"list-group-item\">" + weatherObj[i].tempMin + "°F / " + weatherObj[i].tempMax + "°F" + "<br>" +
            "<img src='http://openweathermap.org/img/wn/" + weatherObj[i].icon + "@2x.png' width='50px' height='50px'>" + "</li>" +
            "            <li class=\"list-group-item\"> Description: " + weatherObj[i].description + "<br><br>Humdity: " + weatherObj[i].humidity + "</li>\n" +
            "            <li class=\"list-group-item\">Wind: " + weatherObj[i].wind + "</li>\n" +
            "            <li class=\"list-group-item\">Pressure: " + weatherObj[i].pressure + "</li>\n" +
            "        </ul>"
    }


});
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [latitude, longitude],
    zoom: 9.5,
    dragRotate: true
})
var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat(result)
    .addTo(map);


function onDragEnd() {

    var lngLat = marker.getLngLat();
    let latitude = lngLat.lat;
    let longitude = lngLat.lng
    map.setCenter([longitude,latitude])
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: openWeatherToken,
        lat: latitude,
        lon: longitude,
        units: "imperial"
    }).done(function (data) {
        var weatherObj = {}
        for (var i = 0, j = 0; i < 40; i = i + 8, j++) {
            weatherObj[j] = {}
            weatherObj[j].tempMin = data.list[i].main.temp_min
            weatherObj[j].tempMax = data.list[i].main.temp_max
            weatherObj[j].description = data.list[i].weather[0].description
            weatherObj[j].wind = data.list[i].wind.speed
            weatherObj[j].pressure = data.list[i].main.pressure
            weatherObj[j].humidity = data.list[i].main.humidity
            weatherObj[j].date = data.list[i].dt_txt
            weatherObj[j].icon = data.list[i].weather[0].icon
        }
        var cards = $(".card-deck").children()
        for (var i = 0; i < cards.length; i++) {
            let card = cards[i];
            console.log(weatherObj[i].icon)
            card.innerHTML = '<div class="card-header">' + weatherObj[i].date.split(" ")[0] + '</div>' +
                "<ul class=\"list-group list-group-flush\">\n" +
                "            <li class=\"list-group-item\">" + weatherObj[i].tempMin + "°F / " + weatherObj[i].tempMax + "°F" + "<br>" +
                "<img src='http://openweathermap.org/img/wn/" + weatherObj[i].icon + "@2x.png' width='50px' height='50px'>" + "</li>" +
                "            <li class=\"list-group-item\"> Description: " + weatherObj[i].description + "<br><br>Humdity: " + weatherObj[i].humidity + "</li>\n" +
                "            <li class=\"list-group-item\">Wind: " + weatherObj[i].wind + "</li>\n" +
                "            <li class=\"list-group-item\">Pressure: " + weatherObj[i].pressure + "</li>\n" +
                "        </ul>"
        }


    })
    reverseGeocode({lng: longitude, lat: latitude}, mapBoxToken).then(function(results) {

        $("#city").html("Current Location: "+ results)
    });
}

marker.on('dragend', onDragEnd);



reverseGeocode({lng: latitude, lat: longitude}, mapBoxToken).then(function(results) {

    $("#city").html("Current Location: "+ results)
});

$(".btn").click(function(event){
    event.preventDefault()
    let inputAddress=$("#inputAddress").val();
    geocode(inputAddress, mapBoxToken).then(function(result) {
        let latitude = result[0]
        let longitude = result[1]
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: openWeatherToken,
            lat: longitude,
            lon: latitude,
            units: "imperial"
        }).done(function (data) {
            var weatherObj = {}
            for (var i = 0, j = 0; i < 40; i = i + 8, j++) {
                weatherObj[j] = {}
                weatherObj[j].tempMin = data.list[i].main.temp_min
                weatherObj[j].tempMax = data.list[i].main.temp_max
                weatherObj[j].description = data.list[i].weather[0].description
                weatherObj[j].wind = data.list[i].wind.speed
                weatherObj[j].pressure = data.list[i].main.pressure
                weatherObj[j].humidity = data.list[i].main.humidity
                weatherObj[j].date = data.list[i].dt_txt
                weatherObj[j].icon = data.list[i].weather[0].icon
            }
            var cards = $(".card-deck").children()
            for (var i = 0; i < cards.length; i++) {
                let card = cards[i];
                card.innerHTML = '<div class="card-header">' + weatherObj[i].date.split(" ")[0] + '</div>' +
                    "<ul class=\"list-group list-group-flush\">\n" +
                    "            <li class=\"list-group-item\">" + weatherObj[i].tempMin + "°F / " + weatherObj[i].tempMax + "°F" + "<br>" +
                    "<img src='http://openweathermap.org/img/wn/" + weatherObj[i].icon + "@2x.png' width='50px' height='50px'>" + "</li>" +
                    "            <li class=\"list-group-item\"> Description: " + weatherObj[i].description + "<br><br>Humdity: " + weatherObj[i].humidity + "</li>\n" +
                    "            <li class=\"list-group-item\">Wind: " + weatherObj[i].wind + "</li>\n" +
                    "            <li class=\"list-group-item\">Pressure: " + weatherObj[i].pressure + "</li>\n" +
                    "        </ul>"
            }
        });
        map.setCenter(result)
       marker.setLngLat(result)
        reverseGeocode({lng: latitude, lat: longitude}, mapBoxToken).then(function(results) {

            $("#city").html("Current Location: "+ results)
        });    })

})




















