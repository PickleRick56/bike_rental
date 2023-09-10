import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { addTodo, replacementTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";

import SignForm from "./SignForm";

function Header() {
    const dispatch = useDispatch();
    const retrievedFromStore = useSelector((state) => state.todo.tasks);

    const [signInToken, setSignInToken] = useState({
        status: null,
        data: {
            token: null,
            user: {
                id: null,
                email: null,
                firstName: null,
                lastName: null,
                approved: false,
            },
        },
    });

    // ЗАПРОС УДАЛЕНИЯ СООБЩЕНИЯ
    // fetch(
    //     "https://sf-final-project-be.herokuapp.com/api/cases/АйДи сообщения",
    //     {
    //         method: "DELETE",

    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8",
    //             Authorization:
    //                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDRmMDUxODY3ZjNjNzUyM2M3MTNmNCIsImlhdCI6MTY5MjU0MjE3OSwiZXhwIjoxNjkzMTQ2OTc5fQ.XlGKgq3WO-VIzInYkv-oLtpEC4gK0ZELNP8AuVvU0AI",
    //         },
    //     }
    // )
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    return (
        <div>
            <SignForm setSignInToken={setSignInToken} />

            {typeof signInToken.data.token === "string" &&
            signInToken.data.token.length > 0 ? (
                <div> {signInToken.data.user.firstName} </div>
            ) : (
                <div> Войти</div>
            )}

            {/* {отправить данные в store по нажатиею накнопку} */}
            <button onClick={() => dispatch(replacementTodo(signInToken))}>
                click
            </button>

            <h1>This is the home header</h1>
            <NavLink to="/">Click to view our home page</NavLink>
            <NavLink to="/about">Click to view our about page</NavLink>
            <NavLink to="/contact">Click to view our contact page</NavLink>
        </div>
    );
}

export default Header;
