'use strict'
export const storageSrvice = {
    save: saveToStorage,
    load: loadFromStorage

}

function saveToStorage(key, val) {
    const json = JSON.stringify(val)
    localStorage.setItem(key, json)
}

function loadFromStorage(key) {
    const json = localStorage.getItem(key)
    return JSON.parse(json)
}