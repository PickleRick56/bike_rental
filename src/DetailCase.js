import { NavLink, useLocation } from "react-router-dom";
import PReport from "./PReport";
import AllCase from "./AllCase";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useId } from "react";

function DetailCase({ prop }) {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, []);

    return (
        <div>
            <h1> Детализированная РЕПОРТ page</h1>
            <NavLink to="/">Click to view our home page</NavLink>

            <div>
                <div>{location.state.T["licenseNumber"]} Номер лицензии</div>
                <div>{location.state.T["ownerFullName"]} Имя </div>
                <div>{location.state.T["type"]} Тип </div>
                <div>{location.state.T["color"]} Цвет</div>
                <div>{location.state.T["createdAt"]} создано в </div>
                <div>{location.state.T["date"]} дата</div>
                <div>{location.state.T["description"]} описание</div>
            </div>
            <NavLink to="/contact">Click to view our contact page</NavLink>
        </div>
    );
}

export default DetailCase;
