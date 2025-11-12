import { NavLink } from "react-router"

function AddMovies() {
    return <div>
        <h2>Add Movie Page</h2>
        <NavLink to="/" className="btn btn-primary">List Movie</NavLink>
    </div>
}

export default AddMovies