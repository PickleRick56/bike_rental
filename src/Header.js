import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { singIn, getAllOfficersreq, getAllCases } from "./request";
import { replacementTodo, allCaseTodo, allOfficersTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";

import SignForm from "./SignForm";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
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

    function logOut() {
        localStorage.clear();
        dispatch(
            replacementTodo({
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
            })
        );
        navigate("/");
    }
    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        localStorage.setItem("token", retrievedFromStore[0].text.data.token);
        return (ev.returnValue = "Are you sure you want to close?");
    });

    useEffect(() => {
        let localStoregeToken = localStorage.getItem("token");
        if (localStoregeToken !== "null") {
            let email = localStorage.getItem("email");
            let password = localStorage.getItem("password");
            logIN(email, password);
        }
        // This side effect will only run once, after the first render
    }, []);

    async function logIN(email, password) {
        let waitingFetch = await singIn(email, password);
        let signInToken = await waitingFetch;

        if (signInToken.status === "OK") {
            dispatch(replacementTodo(signInToken));
            let awaitFetch = await getAllOfficersreq();
            let getAllOfficersr = await awaitFetch;

            dispatch(allOfficersTodo(getAllOfficersr.officers));

            //////
            let awaitFetch2 = await getAllCases();
            let getAllCasesR = await awaitFetch2;

            dispatch(allCaseTodo(getAllCasesR));

            navigate("/");
        }
    }

    return (
        <header>
            <div className="header_firstRaw">
                <div className="Logo">Logo</div>

                <NavLink to="/">Click to view our home page</NavLink>
                <NavLink to="/about">РЕПОРТ</NavLink>
                {retrievedFromStore[0].text.data.user.approved !== false ? (
                    <NavLink to="/contact">Одобренные сотрудники</NavLink>
                ) : (
                    ""
                )}

                {retrievedFromStore[0].text.data.user.approved !== false ? (
                    <>
                        <button onClick={logOut}>LogOut</button>
                    </>
                ) : (
                    <>
                        {location.pathname !== "/signForm" && (
                            <button
                                onClick={() => {
                                    navigate("/signForm");
                                }}
                            >
                                Войти
                            </button>
                        )}

                        {location.pathname !== "/singupPage" && (
                            <button
                                onClick={() => {
                                    navigate("/singupPage");
                                }}
                            >
                                Регистрация
                            </button>
                        )}
                    </>
                )}
            </div>
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
        </header>
    );
}

export default Header;
