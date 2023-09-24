import { NavLink, useLocation } from "react-router-dom";
import PReport from "./PReport";
import AllCase from "./AllCase";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useId, useRef } from "react";
import { singIn, report, editCaseReq } from "./request";

function DetailCase({ prop }) {
    const location = useLocation();
    const ownerFullNameElements = useRef();
    const licenseNumberElements = useRef();
    const typeElements = useRef();
    const colorElements = useRef();
    const dateElements = useRef();
    const descriptionElements = useRef();

    return (
        <div>
            <h1> Детализированная РЕПОРТ page</h1>
            <NavLink to="/">Click to view our home page</NavLink>
            <div>ТУТ ЧТОТО НАПИСАНО</div>

            <form id={location.state.T["_id"]}>
                <div>
                    Номер лицензии
                    <input
                        type="text"
                        id={location.state.T["licenseNumber"]}
                        ref={licenseNumberElements}
                        placeholder={location.state.T["licenseNumber"]}
                    />
                </div>
                <div>
                    Имя
                    <input
                        type="text"
                        id={location.state.T["ownerFullName"]}
                        ref={ownerFullNameElements}
                        placeholder={location.state.T["ownerFullName"]}
                        required
                    />
                </div>
                <div>
                    Тип
                    <select
                        name="typeElements"
                        id={location.state.T["type"]}
                        ref={typeElements}
                    >
                        <option value="sport">sport</option>
                        <option value="general">general</option>
                    </select>
                </div>
                <div>
                    Цвет
                    <input
                        type="text"
                        id={location.state.T["color"]}
                        ref={colorElements}
                        placeholder={location.state.T["color"]}
                    />
                </div>

                <div>
                    дата
                    <input
                        type="text"
                        id={location.state.T["date"]}
                        ref={dateElements}
                        placeholder={location.state.T["date"]}
                    />
                </div>
                <div>
                    описание
                    <input
                        type="text"
                        id={location.state.T["description"]}
                        ref={descriptionElements}
                        placeholder={location.state.T["description"]}
                    />
                </div>
                <button
                    onClick={(evt) => {
                        evt.preventDefault();
                        let newJSObject = {
                            ownerFullName: ownerFullNameElements.current.value,
                            licenseNumber: licenseNumberElements.current.value,
                            type: typeElements.current.value,
                            color: colorElements.current.value,
                            date: dateElements.current.value,
                            description: descriptionElements.current.value,
                        };

                        for (let key in newJSObject) {
                            console.log(newJSObject[key].length);
                            if (newJSObject[key].length < 1) {
                                delete newJSObject[key];
                            }
                        }

                        editCaseReq(location.state.T["_id"], newJSObject);
                    }}
                >
                    Submit
                </button>
            </form>
            <NavLink to="/contact">Click to view our contact page</NavLink>
        </div>
    );
}

export default DetailCase;
