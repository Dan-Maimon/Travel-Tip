import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'

window.onload = onInit;
window.onAddMarker = onAddMarker;
window.onPanTo = onPanTo;
window.onGetLocs = onGetLocs;
window.onGetUserPos = onGetUserPos;
window.onMarkLoc = onMarkLoc;
window.onEnterLoc = onEnterLoc;
window.onGoTo = onGoTo;

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

function onMarkLoc(locId, val) {
    locService.getLocs()
        .then(locs => {
            mapService.setMarker(locId, val, locs)
        })
}

function onEnterLoc() {
    const currLoc = mapService.getCurrClickedPos()
    const locName = prompt('Enter a name please')
    locService.enterLoc(locName, currLoc)

}

function renderLocs(locs) {
    console.log(locs);
    const strHTMLs = [];
    locs.map(loc => {
        const createdAt = locService.convertTime(loc.createdAt)
        const updatedAt = locService.convertTime(loc.updatedAt)
        strHTMLs.push(`
                <tr>
                    <td>${loc.name}</td>
                    <td>${loc.lat}</td>
                    <td>${loc.lng}</td>
                    <td>${loc.wheater}</td>
                    <td>${createdAt}</td>
                    <td>${updatedAt}</td>
                    <td><input type="checkbox" onchange="onMarkLoc(${loc.id}, checked)"></td>
                    <td><button onclick="onGoTo(${loc.id})">Go</button></td>
                </tr>
        `)
    })
    document.querySelector('.locs-container').innerHTML = strHTMLs.join('')
}

function onGoTo(id) {
    console.log('loc:', id);
    locService.getLocs()
        .then(locs => {
            const pos = {
                lat: locs[id-1].lat,
                lng: locs[id-1].lng
            }
            return Promise.resolve(pos)
        })
        // .then(pos => {console.log(pos)})
        .then(pos=> {mapService.panTo(pos.lat, pos.lng)})
}