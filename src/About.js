import { NavLink } from "react-router-dom";
import PReport from "./PReport";
import AllCase from "./AllCase";

function About({ prop }) {
    return (
        <div>
            <h1> Доступный всем РЕПОРТ page</h1>
            <NavLink to="/">Click to view our home page</NavLink>

            <NavLink to="/contact">Click to view our contact page</NavLink>
            <PReport></PReport>
            <AllCase></AllCase>
        </div>
    );
}

export default About;
