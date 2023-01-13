import { toyService } from "../services/toy-service.js";

import { store, Store } from '../store/store.js';

import {SET_TOYS, REMOVE_TOY, ADD_TOY, UPDATE_TOY, SET_FILTER, SET_SORT} from '../store/toy.reducer.js';

export function loadToys(filterBy) {
    return toyService.query(filterBy)
    .then((toys) => {

        console.log('todos frow query', toys);
        store.dispatch({type: SET_TOYS, toys})
    })

    .catch(err => {
        console.log('Had issues loading toys', err)
        throw err
    })

}

export function removeToy(toyId) {
    console.log('toyId from action:', toyId)

    return toyService.remove(toyId)
    .then(() => {
        store.dispatch({type: REMOVE_TOY, toyId})
        
    })
    .catch(err => {
        console.log('Had issues Removing toy', err)
        throw err
    })
   
}

export function saveToy(toy) {
    const type = (toy._id) ? UPDATE_TOY : ADD_TOY
    return toyService.save(toy)
        .then(savedToy => {
            store.dispatch({ type, toy: savedToy })
            return savedToy
        })
        .catch(err => {
            console.error('Cannot save todo:', err)
            throw err
        })
}

export function setFilter(filter) {

    return Promise.resolve(store.dispatch({type: SET_FILTER, filter}))
}

export function setSort(sort) {
    console.log('sortxxx:', sort)

    store.dispatch({ type: SET_SORT, sort })
}
