import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Form } from 'react-router-dom'
import { ToyList } from '../cmps/toy-list.jsx'
import { loadToys, removeToy } from '../store/toy-action.js'
import { showErrorMsg, showSuccessMsg} from '../services/event-bus.service.js'



export function ToyIndex() {

    const toys = useSelector((storeState) => storeState.toyModule.toys)

    useEffect(() => {
        loadToys()


    }, [])

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



    return <section>
        <h3>Toys store</h3>

        <ToyList
            toys={toys}
            onRemoveToy={onRemoveToy}

        />
        {/* {JSON.stringify(toys)} */}


    </section>

}