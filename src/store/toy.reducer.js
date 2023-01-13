import { toyService } from "../services/toy-service.js"

export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const ADD_TOY = 'ADD_TOY'
export const UPDATE_TOY = 'UPDATE_TOY'
export const SET_FILTER ="SET_FILTER"
export const SET_SORT = "SET_SORT"




const initialState = {
    toys: [],
    filterBy: toyService.getDefaultFilter(),

}

export function toyReducer(state = initialState, action) {
    let toys

    switch (action.type) {
        case SET_TOYS:
            return { ...state, toys: action.toys }
        case REMOVE_TOY:
            toys = state.toys.filter(t => t._id !== action.toyId)
            return { ...state, toys }

        case ADD_TOY:
            toys = [...state.toys, action.toy]
            return { ...state, toys }

        case UPDATE_TOY:
            toys = state.toys.map(toy => toy._id === action.toy._id ? action.toy : toy)
            return { ...state, toys }

        case SET_FILTER:
            return { ...state, filterBy: action.filter }

            case SET_SORT:
                return {...state, sortBy: action.sort }


        default:
            return state
    }
}
