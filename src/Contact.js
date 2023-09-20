import { NavLink } from "react-router-dom";
import { allOfficersTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";
import {
    getAllOfficersreq,
    deleteOfficersreq,
    getAllCases,
    authorization,
} from "./request";
import { useState, useEffect, useId } from "react";

function Contact() {
    const [officersData, setOfficersData] = useState([]);
    const dispatch = useDispatch();

    async function waitForgetAllOfficers() {
        let data;
        let awitFetch = await getAllOfficersreq();
        data = await awitFetch;
        setOfficersData(data.officers);
        dispatch(allOfficersTodo(data.officers));
        console.log(data.officers);
    }

    function deleteOfficer(e) {
        let a = [];
        officersData.map((k) => {
            if (k["_id"] != e) {
                a.push(k);
            }
        });
        setOfficersData([...a]);
        // deleteCaseReq(e);
        deleteOfficersreq(e);
        console.log(a);
    }

    return (
        <div>
            <h1>This is the Officers page</h1>
            <button
                onClick={(evt) => {
                    evt.preventDefault();
                    waitForgetAllOfficers();
                }}
            >
                Запросить всех пользователей
            </button>
            <NavLink to="/">Click to view our home page</NavLink>
            <NavLink to="/about">Click to view our about page</NavLink>

            {officersData.length > 0 ? (
                <div className="allOfficersData">
                    {officersData.map((keys) => (
                        <div
                            key={keys["_id"]}
                            id={keys["_id"]}
                            className="example"
                        >
                            <NavLink to={`/${keys["_id"]}`} state={{ Z: keys }}>
                                {keys.firstName} {keys.lastName}
                            </NavLink>
                            <button
                                onClick={(evt) => {
                                    evt.preventDefault();
                                    deleteOfficer(evt.target.parentElement.id);

                                    console.log(evt.target.parentElement.id);
                                }}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                "тут ничего"
            )}
        </div>
    );
}

export default Contact;
