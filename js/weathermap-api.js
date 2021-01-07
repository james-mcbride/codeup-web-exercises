function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

geocode("San Antonio, TX", mapBoxToken).then(function(result){
    var latitude=result[0]
    var longitude = result[1]
    console.log(latitude);
    console.log(longitude)
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: openWeatherToken,
        lat:    longitude,
        lon:   latitude,
        units: "imperial"
    }).done(function(data) {
        console.log(data)
        var weatherObj={}
        for (var i =0, j=0; i<40; i=i+8, j++) {
            weatherObj[j] = {}
            weatherObj[j].tempMin=data.list[i].main.temp_min
            weatherObj[j].tempMax=data.list[i].main.temp_max
            weatherObj[j].description=data.list[i].weather[0].description
            weatherObj[j].wind=data.list[i].wind.speed
            weatherObj[j].pressure=data.list[i].main.pressure
            weatherObj[j].humidity=data.list[i].main.humidity
            weatherObj[j].date=data.list[i].dt_txt
            weatherObj[j].icon=data.list[i].weather[0].icon
        }
        console.log(weatherObj)
        var cards=$(".card-deck").children()
        for (var i=0; i<cards.length; i++){
            let card=cards[i];
            console.log(weatherObj[i].icon)
            card.innerHTML='<div class="card-header">'+weatherObj[i].date.split(" ")[0]+'</div>' +
                "<ul class=\"list-group list-group-flush\">\n" +
                "            <li class=\"list-group-item\">"+weatherObj[i].tempMin+"°F / "+weatherObj[i].tempMax+"°F"+"<br>"+
                 "<img src='http://openweathermap.org/img/wn/"+ weatherObj[i].icon+"@2x.png' width='50px' height='50px'>"+"</li>"+
                "            <li class=\"list-group-item\"> Description: "+weatherObj[i].description+"<br><br>Humdity: "+weatherObj[i].humidity+"</li>\n" +
                "            <li class=\"list-group-item\">Wind: "+weatherObj[i].wind+"</li>\n" +
                "            <li class=\"list-group-item\">Pressure: "+weatherObj[i].pressure+"</li>\n" +
                "        </ul>"
        }
    });


})



// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: openWeatherToken,
//     q:     "San Antonio, US",
//     units: "imperial"
// }).done(function(data) {
//     let iconImage="<img src='http://openweathermap.org/img/wn/"+ data.weather[0].icon+"@2x.png'>"
//     $("body").append(iconImage)
// });

// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: openWeatherToken,
//     lat: longitude,
//     lon: latitude,
//     units: "imperial"
// }).done(function(data){
//     console.log(data)
// })


