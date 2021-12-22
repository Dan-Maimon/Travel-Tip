

export const mapService = {
    initMap,
    addMarker,
    panTo,
    clickMap,

}

let gMap;

function clickMap() {
    gMap.addListener("click", ev => {
        const clickedPos = { lat: ev.latLng.lat(), lng: ev.latLng.lng() }
        ToggleInfoWindow(clickedPos)
    })
}

function ToggleInfoWindow(location) {
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
        content:  JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2),
        position: location,
    });
    
    // infoWindow.open(gMap);
    // // Configure the click listener.
    // gMap.addListener("click", (mapsMouseEvent) => {
    //     // Close the current InfoWindow.
    //     infoWindow.close();
    //     // Create a new InfoWindow.
    //     infoWindow = new google.maps.InfoWindow({
    //         position: location,
    //     });
    //     infoWindow.setContent(
    //         JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    //     );
    //     infoWindow.open(gMap);
    // });

}

function initMap(lat = 31.506109831, lng = 34.643250554) {
    console.log('InitMap');
    return _connectGoogleApi()
        .then(() => {
            console.log('google available');
            gMap = new google.maps.Map(
                document.querySelector('#map'), {
                center: { lat, lng },
                zoom: 15
            })
            console.log('Map!', gMap);
        })

}

function addMarker(loc) {
    var marker = new google.maps.Marker({
        position: loc,
        map: gMap,
        title: 'Hello World!'
    });
    return marker;
}

function panTo(lat, lng) {
    var laLatLng = new google.maps.LatLng(lat, lng);
    gMap.panTo(laLatLng);
}



function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    const API_KEY = 'AIzaSyBa1omKmZYI4Bz8r_Kn-FgGdHdMWKCZymM'; //TODO: Enter your API Key
    var elGoogleApi = document.createElement('script');
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    elGoogleApi.async = true;
    document.body.append(elGoogleApi);

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve;
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
}