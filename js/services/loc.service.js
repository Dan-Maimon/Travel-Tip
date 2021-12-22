export const locService = {
    getLocs
}


const locs = [
    {
        name: 'Greatplace',
        lat: 32.047104,
        lng: 34.832384,
        wheater: null,
        createdAt: null,
        updatedAt: null
    },
    {
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
        }, 2000)
    });
}
