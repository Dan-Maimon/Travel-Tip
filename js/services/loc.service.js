import { storageSrvice } from './storage.service.js'

export const locService = {
    getLocs,
    convertTime,
    enterLoc
}

const STORAGE_KEY = 'locsDB'

let gNextid = 1
let gLocs = []


function createLoc(locName, pos) {
    const loc = {
        id: gNextid++,
        name: locName,
        lat: pos.lat,
        lng: pos.lng,
        wheater: null,
        createdAt: Date.now(),
        updatedAt: null,
        marker: null
    }
    gLocs.push(loc)
    storageSrvice.save(STORAGE_KEY, gLocs)
}


function enterLoc(locName, locPos) {
    createLoc(locName, locPos);
}

function getLocs() {
    if (!gLocs.length) gLocs = storageSrvice.load(STORAGE_KEY)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(gLocs);
        }, 0)
    });
}


function convertTime(timestamp) {
    const date = new Date(timestamp)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    if (!timestamp) return `No updates`
    return `${day}-${month}-${year}`
}
