

import { useEffect, useState } from "react"
import { toyService } from "../services/toy-service"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { saveToy } from "../store/toy-action"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { Link } from "react-router-dom"

export function ToyEdit() {

    const [toy, setToy] = useState(toyService.getEmptyToy())
    const { toyId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!toyId) return
        toyService.getById(toyId)
            .then(toy => setToy(toy))
            .catch(err => {
                console.log("unable to load a toy");
                navigate('/toy')
            })
    })

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setToy((prevTodo) => ({ ...prevTodo, [field]: value }))

    }

    function handleBooleanChange({ target }) {
        let { value, name: field } = target
        let newValue
        if (value === 'false') newValue = false
        if (value === 'true') newValue = true
        setToy((prevTodo) => ({ ...prevTodo, [field]: newValue }))

    }

    function onManageToy(ev) {
        ev.preventDefault()
        saveToy(toy)
            .then(() => {
                console.log(`Toy edited (id: ${toy._id})`)
                navigate('/toy')
            })
            .catch((err) => {
                showErrorMsg('the proccess is unavaliable', err)
            })
    }

    return <section className='flex-grow main-layout toy-edit'>
        <h2>Edit toy</h2>
        <br />
        <form onSubmit={onManageToy}>

            <label htmlFor="name">Toy Name</label>
            <input type="text"
                name="name"
                id="name"
                onChange={handleChange}
                defaultValue={toy.name}
            />

            <br />

            <label htmlFor="price">Toy price</label>
            <input type="number"
                name="price"
                id="price"
                onChange={handleChange}
                defaultValue={toy.price}
            />

            <br />
            <label htmlFor="inStock">Is in stock:</label>
            <select name="inStock" id="inStock"
             onChange={handleBooleanChange} defaultValue={toy.inStock ? 'true' : 'false'}

            >
                <option value="false">No</option>
                <option value="true">Yes</option>

            </select>

            <br />

            <button className='btn clean-btn'>Save</button>
            <Link to="/toy" className="btn">Back to List</Link>

        </form>


    </section>


}