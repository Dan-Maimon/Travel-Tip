import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'

window.onload = onInit;
window.onAddMarker = onAddMarker;
window.onPanTo = onPanTo;
window.onGetLocs = onGetLocs;
window.onGetUserPos = onGetUserPos;

function onInit() {
    mapService.initMap()
        .then(() => {
            console.log('Map is ready');
        })
        .then(locService.getLocs)
        .catch(() => console.log('Error: cannot init map'));
}


// This function provides a Promise API to the callback-based-api of getCurrentPosition
function getPosition() {
    console.log('Getting Pos');
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

function onAddMarker() {
    console.log('Adding a marker');

    mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 });

}

function onGetLocs() {
    locService.getLocs()
        .then(locs => {
            console.log('Locations:', locs)
            renderLocs(locs)
        })
}


function onGetUserPos() {
    getPosition()
        .then(pos => {
            console.log('User position is:', pos.coords);
            mapService.panTo(pos.coords.latitude, pos.coords.longitude)
            document.querySelector('.user-pos').innerText =
                `Latitude: ${pos.coords.latitude} - Longitude: ${pos.coords.longitude}`
        })
        .catch(err => {
            console.log('err!!!', err);
        })
}

function onPanTo() {
    console.log('Panning the Map');
    mapService.panTo(35.6895, 139.6917);
}

function renderLocs(locs) {
    console.log('I am workong');
    console.log(locs);
    const strHTMLs = [];
    locs.map(loc => {
        strHTMLs.push(`
                <tr>
                    <td>${loc.name}</td>
                    <td>${loc.lat}</td>
                    <td>${loc.lng}</td>
                    <td>${loc.wheater}</td>
                    <td>${loc.createdAt}</td>
                    <td>${loc.updatedAt}</td>
                </tr>
        `)
    })
    document.querySelector('.locs-container').innerHTML = strHTMLs.join('')
}