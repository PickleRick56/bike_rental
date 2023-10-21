import { NavLink } from "react-router-dom";
import { allOfficersTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { getAllOfficersreq, deleteOfficersreq } from "./request";
import { useState, useEffect, useId } from "react";

function Contact() {
    const [officersData, setOfficersData] = useState([]);
    const dispatch = useDispatch();
    const retrievedFromStore = useSelector((state) => state.todo.tasks);

    function deleteOfficer(e) {
        let data = [];
        retrievedFromStore[2].text.map((k) => {
            if (k["_id"] != e) {
                data.push(k);
            }
        });
        dispatch(allOfficersTodo(data));

        deleteOfficersreq(e);
    }

    return (
        <div>
            <h1>This is the Officers page</h1>

            <NavLink to="/">Click to view our home page</NavLink>
            <NavLink to="/about">Click to view our about page</NavLink>

            {retrievedFromStore[0].text.data.user.approved !== false ? (
                <div>
                    {" "}
                    {retrievedFromStore[2].text.length > 0 ? (
                        <div className="allOfficersData">
                            {retrievedFromStore[2].text.map((keys) => (
                                <div
                                    key={keys["_id"]}
                                    id={keys["_id"]}
                                    className="example"
                                >
                                    <NavLink
                                        to={`/${keys["_id"]}`}
                                        state={{ Z: keys }}
                                    >
                                        {keys.firstName} {keys.lastName}
                                    </NavLink>
                                    <button
                                        onClick={(evt) => {
                                            evt.preventDefault();
                                            deleteOfficer(
                                                evt.target.parentElement.id
                                            );
                                        }}
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default Contact;
