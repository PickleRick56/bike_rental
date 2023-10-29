import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { allOfficersTodo } from "./todoSlice";
import { useRef } from "react";
import { editOfficerReq, getAllOfficersreq } from "./request";

function DetailOfficersData({ prop }) {
    const navigate = useNavigate();
    const location = useLocation();
    const firstName = useRef();
    const lastName = useRef();
    const ref = useRef(null);
    const dispatch = useDispatch();
    let approved = "";

    const handleClick = () => {
        if (ref.current.checked) {
            approved = true;
        } else {
            approved = false;
        }
    };

    return (
        <div>
            <h1>
                {" "}
                Сотрудник {location.state.Z["firstName"]}
                {location.state.Z["lastName"]}
            </h1>

            <form className="form_size_370" action="">
                <div>
                    Имя:
                    <input
                        className="input_submit"
                        type="text"
                        id={location.state.Z["firstName"]}
                        ref={firstName}
                        placeholder={location.state.Z["firstName"]}
                    />
                </div>
                <div>
                    Фамилия:
                    <input
                        className="input_submit"
                        type="text"
                        id={location.state.Z["lastName"]}
                        ref={lastName}
                        placeholder={location.state.Z["lastName"]}
                    />
                </div>
                <div className="mg-bottom_12">
                    Адрес: {location.state.Z["email"]}
                </div>
                <label htmlFor="approved">
                    Одобрить:
                    <input
                        className="input_submit mg-bottom_-1"
                        ref={ref}
                        type="checkbox"
                        id="approved"
                        name="approved"
                        defaultChecked
                    />
                </label>
                <button
                    onClick={async (evt) => {
                        evt.preventDefault();
                        handleClick();
                        let newJSObject = {
                            firstName: firstName.current.value,
                            lastName: lastName.current.value,
                            approved: approved,
                        };

                        for (let key in newJSObject) {
                            if (newJSObject[key].length < 1) {
                                delete newJSObject[key];
                            }
                        }

                        editOfficerReq(location.state.Z["_id"], newJSObject);

                        setTimeout(async () => {
                            let awaitFetch = await getAllOfficersreq();
                            let getAllOfficersr = await awaitFetch;

                            dispatch(allOfficersTodo(getAllOfficersr.officers));
                            navigate("/contact");
                        }, 1000);
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default DetailOfficersData;
