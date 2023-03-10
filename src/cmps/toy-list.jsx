import { ToyPreview } from './toy-previwe.jsx'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

export function ToyList({ toys, onRemoveToy }) {

    return <ul className="toys-list">
        {toys.map(toy =>

            <li className="toy-view" key={toy._id}>
                <ToyPreview toy={toy} />

                <div>
                    <button className="clean-btn fa-solid x btn"

                        onClick={() => { onRemoveToy(toy._id) }}>x</button>
                    <button className="clean-btn btn" ><Link to={`/toy/${toy._id}`}>details</Link></button>
                    <button className="clean-btn btn" ><Link to={`/toy/edit/${toy._id}`}>edit</Link></button>



                </div>


            </li>)
        }




    </ul >

}