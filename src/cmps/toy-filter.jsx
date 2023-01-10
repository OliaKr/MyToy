import { useEffect, useRef, useState } from 'react'
import { toyService } from '../services/toy-service'
import { utilService } from '../services/utile.service'

export function ToyFilter() {

    const [filterByToEdit, setFilterByToEdit] =useState(toyService.getDefaultFilter())
    setFilterBy = useRef(utilService.debounce(setFilterBy))

    useEffect(() => {
        // update father cmp that filters change very type
        onSetFilter.current(filterByToEdit)
    }, [filterByToEdit])
    
}

return <section className="toy filter">
     <h2>Cars Filter</h2>




</section>