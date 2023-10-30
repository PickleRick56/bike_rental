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

            <form action="" className="signForm">
                <label>
                    Имя
                    <input type="text" ref={firstName} />
                </label>
                <label>
                    Фафмилия
                    <input type="text" ref={lastName} />
                </label>
                <label>
                    E-mail (обязательное поле)
                    <input type="text" ref={email} />
                </label>
                <label>
                    Пароль (обязательное поле)
                    <input type="text" ref={password} />
                </label>
                <label>
                    Client ID (обязательное поле)
                    <input type="text" ref={clientId} />
                </label>
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
