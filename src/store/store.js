import { combineReducers, legacy_createStore as createStore } from 'redux'

import{toyReducer} from './toy.reducer.js'


const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

const rootReducer = combineReducers({
    // appModule: appReducer,
    toyModule: toyReducer,
    // userModule: userReducer
})

export const store = createStore(rootReducer, middleware)

store.subscribe(() => {
    // console.log('**** Store state changed: ****')
    // console.log('storeState:\n', store.getState())
    // console.log('*******************************')
})
