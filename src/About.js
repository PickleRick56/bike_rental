import { NavLink } from "react-router-dom";
import PReport from "./PReport";

function About({ prop }) {
    return (
        <div>
            <h1>This is the about Доступный всем РЕПОРТ page</h1>
            <NavLink to="/">Click to view our home page</NavLink>

            <NavLink to="/contact">Click to view our contact page</NavLink>
            <PReport></PReport>
        </div>
    );
}

export default About;
