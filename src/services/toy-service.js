import { storageService } from "./async-storage.service.js"
import { utilService } from "./utile.service.js"


const STORAGE_KEY = 'tyDB'

_createToys()

const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor", "Battery Powered"]

export const toyService = {
    query,
    getById,
    remove,
    save,
    getDefaultFilter,
    getEmptyToy,

}

function getDefaultFilter() {
    return { txt: '', label: '' }
}

function query() {
    return storageService.query(STORAGE_KEY)
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        return storageService.post(STORAGE_KEY, toy)
    }
}

function getEmptyToy(name, price, labels, inStock = true) {
    return { name, price, labels, inStock }
}

function _createToys() {
    let toys = utilService.loadFromStorage(STORAGE_KEY)
    if (!toys || toys.length) {
        toys = []
        toys.push(_createToy('Lavish Doll', 20, ['Doll'], true, '1.jpg'))
        toys.push(_createToy('Floor Puzzle', 15, ['Puzzle', 'Box game', 'Baby'], true, '2.jpg'))
        toys.push(_createToy('Mr Clown', 18, ['Art', 'Doll'], true, '3.jpg'))
        toys.push(_createToy('Fancy Duckies', 15, ['Doll', 'Baby'], false, '4.jpg'))
        toys.push(_createToy('Battery Car', 11, ['Battery Powered', 'On wheels'], false, '5.jpg'))
        toys.push(_createToy('Yara Greyjoy', 40, ['Doll', 'Box game'], true, '6.jpg'))
        toys.push(_createToy('Plane', 30, ['On wheels', 'Baby'], false, '7.jpg'))
        toys.push(_createToy('Paddles', 30, ['Outdoor', 'Baby'], true, '11.jpg'))


        utilService.saveToStorage(STORAGE_KEY, toys)

    }

}

function _createToy(name, price, labels, inStock, imgUrl) {
    return {
        _id: utilService.makeId(),
        name,
        price,
        labels,
        inStock,
        imgUrl,
    }
}