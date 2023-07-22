import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>This is the home page</h1>
            <NavLink to="/about">Click to view our about page</NavLink>
            <NavLink to="/contact">Click to view our contact page</NavLink>
        </div>
    );
}

export default Home;
