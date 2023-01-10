import { NavLink } from "react-router-dom";


export function AppHeader() {

    return <header className="app-header">
        <nav>
            <NavLink to="/">Home</NavLink>|
            <NavLink to="/about">About</NavLink>|
            <NavLink to="/toy">ToyIndex</NavLink>


        </nav>


    </header>

}