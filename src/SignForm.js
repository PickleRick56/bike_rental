import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { singIn, BigButton } from "./request";
import { addTodo, replacementTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";

function SignForm({ setSignInToken }) {
    const retrievedFromStore = useSelector((state) => state.todo.tasks);
    const dispatch = useDispatch();
    const emailElements = useRef();
    const passwordElements = useRef();
    function logOut() {
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
    }

    return (
        <>
            {retrievedFromStore[0].text.data.user.approved !== false ? (
                <div>
                    {retrievedFromStore[0].text.data.user.firstName}{" "}
                    <button onClick={logOut}>LogOut</button>
                </div>
            ) : (
                <div>
                    {" "}
                    <form>
                        <label>
                            Enter your E-mail :
                            <input
                                id="Email"
                                ref={emailElements}
                                type="email"
                                required
                            />
                        </label>

                        <label>
                            Enter your PassWord :
                            <input
                                id="password"
                                ref={passwordElements}
                                type="text"
                                required
                            />
                        </label>

                        <button
                            onClick={async (evt) => {
                                evt.preventDefault();
                                let waitingFetch = await singIn(
                                    emailElements.current.value,
                                    passwordElements.current.value
                                );
                                let signInToken = await waitingFetch;
                                setSignInToken(signInToken);
                                dispatch(replacementTodo(signInToken));
                            }}
                        >
                            Submit
                        </button>
                    </form>
                    <div>
                        {" "}
                        <NavLink to="/singupPage">
                            <button>Регистрация нового пользователя</button>
                        </NavLink>
                    </div>
                </div>
            )}
        </>
    );
}

export default SignForm;
