import { NavLink } from "react-router-dom";
import { singupReq } from "./request";
import { useRef, useState } from "react";

function SingupPage({ prop }) {
    const firstName = useRef();
    const lastName = useRef();
    const clientId = useRef();
    const email = useRef();
    const password = useRef();

    return (
        <div>
            <h1> РЕГИСТРАЦИЯ НОВОГО ПОЛЬЗОВАТЕЛЯ </h1>
            <NavLink to="/">Click to view our home page</NavLink>

            <NavLink to="/contact">Click to view our contact page</NavLink>

            <form action="">
                <div>
                    Имя
                    <input type="text" ref={firstName} />
                </div>
                <div>
                    Фафмилия
                    <input type="text" ref={lastName} />
                </div>
                <div>
                    E-mail (обязательное поле)
                    <input type="text" ref={email} />
                </div>
                <div>
                    Пароль (обязательное поле)
                    <input type="text" ref={password} />
                </div>
                <div>
                    Client ID (обязательное поле)
                    <input type="text" ref={clientId} />
                </div>
                <button
                    onClick={(evt) => {
                        evt.preventDefault();

                        singupReq(
                            firstName.current.value,
                            lastName.current.value,
                            email.current.value,
                            password.current.value,
                            clientId.current.value
                        );
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SingupPage;
