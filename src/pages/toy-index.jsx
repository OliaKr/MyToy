import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Form } from 'react-router-dom'
import { ToyList } from '../cmps/toy-list.jsx'
import { loadToys, removeToy, setFilter } from '../store/toy-action.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { Link } from 'react-router-dom'
import { ToyFilter } from '../cmps/toy-filter.jsx'



export function ToyIndex() {

    const toys = useSelector((storeState) => storeState.toyModule.toys)
    const filterBy = useSelector((storeState) => storeState.toyModule.filterBy)

    useEffect(() => {
        loadToys(filterBy)


    }, [filterBy])

    function onRemoveToy(toyId) {
        console.log('toyId from index:', toyId)

        removeToy(toyId)
            .then(() => {
                showSuccessMsg('Toy removed')
            })
            .catch(err => {
                showErrorMsg('Cannot remove toy')
            })
    }


    // function onLoadCars(filterBy) {
    //     loadCars(filterBy)
    //         .then(() => {
    //             // showSuccessMsg('Cars loaded')
    //         })
    //         .catch(err => {
    //             showErrorMsg('Cannot load cars')
    //         })
    // }

    function onSetFilter(filterBy) {
        console.log('setFilter', filterBy);
        setFilter(filterBy)
    }



    console.log('filterBy', filterBy);
    return <section>
        <h3>Toys store!</h3>

        <Link to={`/toy/edit`}>  <button className="clean-btn btn">Add Toy</button></Link>
        <ToyFilter onSetFilter={onSetFilter} />

        <ToyList
            toys={toys}
            onRemoveToy={onRemoveToy}

        />
        {/* {JSON.stringify(toys)} */}


    </section>

}