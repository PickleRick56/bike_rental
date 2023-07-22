import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <h1>This is the home header</h1>
            <NavLink to="/">Click to view our home page</NavLink>
            <NavLink to="/about">Click to view our about page</NavLink>
            <NavLink to="/contact">Click to view our contact page</NavLink>
        </div>
    );
}

export default Header;
