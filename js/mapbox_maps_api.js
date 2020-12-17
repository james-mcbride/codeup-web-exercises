mapboxgl.accessToken = mapBoxToken;

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




var map = new mapboxgl.Map({
   container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4916, 29.4252],
    zoom: 9.5,
    dragRotate: true
})
geocode("Heidelberg, Germany", mapBoxToken).then(function(result){
    console.log(result)
    map.setCenter(result)
    map.setZoom(10)
})
var zoomLevel=document.querySelector("#zoom");
zoomLevel.addEventListener("change", function(){
    zoomLevel=document.querySelector("#zoom");
    map.setZoom(Number(zoomLevel.value))
})

geocode("Steingasse 9, 69117 Heidelberg, Germany",mapBoxToken).then(function(result){
    var marker=new mapboxgl.Marker()
        .setLngLat(result)
        .addTo(map);

})
var marker=new map.Marker()
    .setLngLat()


