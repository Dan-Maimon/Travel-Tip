export const locService = {
    getLocs,
    convertTime,
    enterLoc
}

let gNextid = 1

const locs = [
    {
        id: gNextid++,
        name: 'Greatplace',
        lat: 32.047104,
        lng: 34.832384,
        wheater: null,
        createdAt: Date.now(),
        updatedAt: null,
        marker: null
    },
    {
        id: gNextid++,
        name: 'gBaba',
        lat: 32.315748,
        lng: 34.113354,
        wheater: null,
        createdAt: Date.now(),
        updatedAt: null,
        marker: null
    }

]

function enterLoc(locName, locPos) {
    
}

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
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
