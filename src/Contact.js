import { NavLink } from "react-router-dom";

function Contact() {
    return (
        <div>
            <h1>This is the contact page</h1>
            <NavLink to="/">Click to view our home page</NavLink>
            <NavLink to="/about">Click to view our about page</NavLink>
        </div>
    );
}

export default Contact;
