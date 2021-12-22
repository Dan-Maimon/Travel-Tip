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
        createdAt: null,
        updatedAt: null
    },
    {
        id: gNextid++,
        name: 'gBaba',
        lat: 32.315748,
        lng: 34.113354,
        wheater: null,
        createdAt: null,
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

