/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//initialize the map
    mapboxgl.accessToken = mapBoxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.4916, 29.4252],
        zoom: 9.5,
        dragRotate: true
    })


//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.
// TODO TOGETHER: Change the color of the marker
var marker = new mapboxgl.Marker({
    color:"purple",
    draggable: true
})
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);
// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"
// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.
// var codeupPopup = new mapboxgl.Popup()
//     .setLngLat([ -98.48856778968238, 29.427365066417885])
//     .setHTML("<p>Codeup Rocks!</p>")
//     //.setMaxWidth("300px")
//     .addTo(map);
//
// var alamoPopup = new mapboxgl.Popup()
//     //.setLngLat([  -98.48614257017626,29.426073940495563])
//     .setHTML("<p>Remember the Alamo!</p>")
//     //.setMaxWidth("300px")
//     .addTo(map);
//
// marker.setPopup(alamoPopup)

// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"



/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.
geocode("600 Navarro St #350 San Antonio TX 78205",mapBoxToken).then(function(result){
    console.log(result);
    //map.setCenter(result); //
    map.setZoom(18);
    marker.setLngLat(result)
    var alamoPopup = new mapboxgl.Popup()
    .setLngLat(result)
    .setHTML("<p>Codeup rules</p>")
    //.setMaxWidth("300px")
    .addTo(map);
    map.flyTo({
        center: result,
        zoom: 18,
        speed: 0.1,
        curve: 5,
        essential: true

    })
})

// var newLocation = prompt();
//
// geocode(newLocation, mapBoxToken).then(function(result){
//     map.flyTo(result)
//     map.setZoom(18)
// })

//TODO: Using the geocode method above, add a marker at Codeup to the map
//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()



// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo
// TODO: Reverse geocode coordinates of your choice using the reverse geocode method


