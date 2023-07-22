import { NavLink } from "react-router-dom";

function Error() {
    return (
        <div>
            <h1>404</h1>
            <NavLink to="/">Click to view our home page</NavLink>

            <NavLink to="/contact">Click to view our contact page</NavLink>
        </div>
    );
}

export default Error;
