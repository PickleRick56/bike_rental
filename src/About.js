import { NavLink } from "react-router-dom";
import { addTodo, replacementTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";
import PReport from "./PReport";
import AllCase from "./AllCase";

function About({ prop }) {
    const retrievedFromStore = useSelector((state) => state.todo.tasks);
    return (
        <>
            <div>
                <h1> Доступный всем РЕПОРТ page</h1>
                <NavLink to="/">Click to view our home page</NavLink>
                <NavLink to="/contact">Click to view our contact page</NavLink>
                <PReport></PReport>
            </div>
            {retrievedFromStore[0].text.data.user.approved !== false ? (
                <div>
                    <AllCase></AllCase>
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default About;
