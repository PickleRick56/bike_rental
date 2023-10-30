import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import PReport from "./PReport";
import AllCase from "./AllCase";

function About({ prop }) {
    const retrievedFromStore = useSelector((state) => state.todo.tasks);
    return (
        <>
            <div>
                <h1> Сообщить о потере велосипеда</h1>

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
