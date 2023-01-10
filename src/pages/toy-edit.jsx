

 import { useEffect, useState } from "react"
 import { toyService } from "../services/toy-service.js"

export function ToyEdit() {

const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy())



    return <section className ='flex-grow main-layout toy-edit'>
        <h2>Edit toy</h2>
        <br />


    </section>

    
}