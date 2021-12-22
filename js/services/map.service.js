

export const mapService = {
    initMap,
    addMarker,
    panTo,
<<<<<<< HEAD
    clickMap
=======
    clickMap,

>>>>>>> 60002b5084c6d6ebc519a9721bd2cce84ed6adf7
}

let gMap;

<<<<<<< HEAD
function clickMap(){
    console.log('gMap:', gMap);
}

function initMap(lat = 32.0749831, lng = 34.9120554) {
=======
function clickMap() {
    let myLatlng;
    gMap.addListener('click', ev => {
        myLatlng = { lat: ev.latLng.lat(), lng: ev.latLng.lng() }
    })
    console.log(myLatlng);
    // let infoWindow = new google.maps.InfoWindow({
    //     content: "Click the map to get Lat/Lng!",
    //     position: myLatlng,
    //   });
    //   infoWindow.open(gMap);
}

function initMap(lat = 31.506109831, lng = 34.643250554) {
>>>>>>> 60002b5084c6d6ebc519a9721bd2cce84ed6adf7
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