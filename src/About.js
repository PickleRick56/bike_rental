import { NavLink } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
            <NavLink to="/">Click to view our home page</NavLink>

            <NavLink to="/contact">Click to view our contact page</NavLink>
        </div>
    );
}

export default About;
