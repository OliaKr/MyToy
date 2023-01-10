import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { toyService } from '../services/toy-service'
import { showErrorMsg } from "../services/event-bus.service"

export function ToyDetails() {


    const { toyId } = useParams()
    const [toy, setToy] = useState(null)

    useEffect(() => {
        loadToy()
    }, [])

    function loadToy() {
        toyService.getById(toyId)
            .then((toy) => {
                console.log('toy from details', toy);
                setToy(toy)
            })
            .catch((err) => {
                showErrorMsg('Cannot load todo')

            })
    }

    if (!toy) return <h1>loading...</h1>
    return <section className="toy-details">

        <h2>hello from details</h2>
        <br />
        <h2>{toy.name}</h2>
        <p>Price: {toy.price}</p>
        <p>{toy.labels}</p>
        <p>Desciption: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ducimus sit ipsa mollitia sed ipsum odit? Distinctio reiciendis quo cupiditate neque at, itaque ducimus quod voluptates dignissimos adipisci beatae deleniti?</p>
        {!toy.inStock && <p className="out-stock">Out of stock</p>}

    
       
        <div className="img-details">
            <img src={require (`../assets/img/${toy.imgUrl}`)}/>

        </div>
        <div className='btn-back'>
            <Link to="/toy" className="btn">Back to List</Link>
        </div>
    </section>
}