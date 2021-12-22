export const locService = {
    getLocs
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
        updatedAt: null
    },
    {
        id: gNextid++,
        name: 'gBaba',
        lat: 32.315748,
        lng: 34.113354,
        wheater: null,
        createdAt: Date.now(),
        updatedAt: null
    }

]

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 0)
    });
}
convertTime(locs[0].createdAt);
function convertTime(timestamp) {
    const date = new Date(timestamp)
    console.log(date);
    const day = date.getDay()
    const month = date.getDate() + 1
    const year = date.getFullYear()
    console.log(day, month, year);
}
