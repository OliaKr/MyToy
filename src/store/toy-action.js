import { toyService } from "../services/toy-service.js";

import { store, Store } from '../store/store.js';

import {SET_TOYS, REMOVE_TOY} from '../store/toy.reducer.js';

export function loadToys() {
    return toyService.query()
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
