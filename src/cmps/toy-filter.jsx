import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toyService } from '../services/toy-service'
import { utilService } from '../services/utile.service'
import { SET_FILTER } from '../store/toy.reducer'



export function ToyFilter({ onSetFilter }) {

    // const [filterByToEdit, setFilterByToEdit] = useState(toyService.getDefaultFilter())

    const filterBy = useSelector((storeState) => storeState.toyModule.filterBy)

    const dispatch = useDispatch()


    // onSetFilter = useRef(utilService.debounce(onSetFilter))

    const elInputRef = useRef(null)


    useEffect(() => {
     
        elInputRef.current.focus()
    }, [])

    // useEffect(() => {
    //     // update father cmp that filters change very type
    //     onSetFilter.current(filterByToEdit)
    // }, [filterByToEdit])

    function handleChange({ target }) {

     
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        dispatch({type: SET_FILTER, filter: {...filterBy, [field]: value}})


            // (prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
       console.log('filter to edit', filterBy);
        ev.preventDefault()
        onSetFilter(filterBy)
    }



    return <section className="toy filter">
        <h2>Filter</h2>

        <form onSubmit={onSubmitFilter} >
            <label htmlFor="name">Toy name:</label>
            <input type="text"
                id="name"
                name="txt"
                placeholder="By name"
                value={filterBy.txt}
                onChange={handleChange}
                ref={elInputRef}
            />

            <label htmlFor="maxPrice">Max price:</label>
            <input type="number"
                id="maxPrice"
                name="maxPrice"
                placeholder="By price"
                value={filterBy.maxPrice}
                onChange={handleChange}
            />

            <button hidden>Filter</button>




        </form>




    </section>
}