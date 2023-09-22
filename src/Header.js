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

    // ЗАПРОС ПОЛУЧЕНИЯ ВСЕХ СООБЩЕНИЙ
    // fetch("https://sf-final-project-be.herokuapp.com/api/cases/", {
    //     method: "GET",

    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //         Authorization:
    //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWE5ODM0M2VmNWZhYmI5Mjc3YWQzZSIsImlhdCI6MTY5MzMyODI2MywiZXhwIjoxNjkzOTMzMDYzfQ.C17aRFTEWf0RxhZa83qdDl6zMk8JV-FOGnKCD5AbkWU",
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    // токен "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDRmMDUxODY3ZjNjNzUyM2M3MTNmNCIsImlhdCI6MTY5MjU0MjE3OSwiZXhwIjoxNjkzMTQ2OTc5fQ.XlGKgq3WO-VIzInYkv-oLtpEC4gK0ZELNP8AuVvU0AI"

    // ЗАПРОС от пользователя т.е. БЕЗАВТОРИЗАЦИОННОЕ СООБЩЕНИЕ
    // fetch("https://sf-final-project-be.herokuapp.com/api/public/report", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         ownerFullName: "John Doe",
    //         licenseNumber: "56y34gwrtgrt",
    //         type: "sport",
    //         clientId: "b5813d16-20bc-4e8e-97ad-ff92cc9532c2",
    //     }),
    // })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    //     ПРИМЕР использования  ХЭДЭРА
    // fetch('url', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer тут токен
    //     },
    //     body: JSON.stringify({
    //       // Тело запроса (если необходимо)
    //     })
    //   })

    // fetch("https://sf-final-project-be.herokuapp.com/api/auth/sign_up", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         email: "a126d222sdffsdfr@gmail.com",
    //         password: "12345",
    //         firstName: "delete",
    //         lastName: "me",
    //         clientId: "0718e5e8-fb23-4947-9f4c-9eea84446cc3",
    //     }),
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    // АВТОРИЗПЦИЯ ПОЛЬЗОВАТЕЛЯ
    // fetch("https://sf-final-project-be.herokuapp.com/api/auth/sign_in", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         email: "umbergerumberger@gmail.com",
    //         password: "12345",
    //     }),
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    // ПРОВЕРКА АВТОРИЗАЦИИ ПОЛЬЗОВАТЕЛЯ
    // fetch("https://sf-final-project-be.herokuapp.com/api/auth/", {
    //     method: "GET",

    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //         Authorization:
    //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDRmMDUxODY3ZjNjNzUyM2M3MTNmNCIsImlhdCI6MTY5MjU0MjE3OSwiZXhwIjoxNjkzMTQ2OTc5fQ.XlGKgq3WO-VIzInYkv-oLtpEC4gK0ZELNP8AuVvU0AI",
    //     },
    // })
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
            <NavLink to="/singupPage">Регистрация нового пользователя</NavLink>
        </div>
    );
}

export default Header;
