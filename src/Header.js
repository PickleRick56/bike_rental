import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { addTodo, replacementTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";

import SignForm from "./SignForm";

function Header() {
    // const dispatch = useDispatch();
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

    return (
        <div>
            <SignForm setSignInToken={setSignInToken} />
            {/* 
            {typeof signInToken.data.token === "string" &&
            signInToken.data.token.length > 0 ? (
                <div> {signInToken.data.user.firstName} </div>
            ) : (
                <div> Войти</div>
            )} */}

            {/* {отправить данные в store по нажатиею накнопку} */}
            {/* <button onClick={() => dispatch(replacementTodo(signInToken))}>
                click
            </button> */}

            <h1>This is the home header</h1>
            <NavLink to="/">Click to view our home page</NavLink>
            <NavLink to="/about">РЕПОРТ</NavLink>
            {retrievedFromStore[0].text.data.user.approved !== false ? (
                <NavLink to="/contact">Одобренные сотрудники</NavLink>
            ) : (
                ""
            )}
        </div>
    );
}

export default Header;
