import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { singIn, getAllOfficersreq, getAllCases } from "./request";
import { allCaseTodo, replacementTodo, allOfficersTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";

function SignForm() {
    const retrievedFromStore = useSelector((state) => state.todo.tasks);
    const dispatch = useDispatch();
    const emailElements = useRef();
    const passwordElements = useRef();
    const navigate = useNavigate();

    return (
        <>
            <div className="signForm">
                {retrievedFromStore[0].text.data.user.approved !== false ? (
                    <div>{retrievedFromStore[0].text.data.user.firstName} </div>
                ) : (
                    <>
                        <form className="signForma">
                            <label>
                                E-mail :
                                <input
                                    id="Email"
                                    ref={emailElements}
                                    type="email"
                                    required
                                />
                            </label>
                            <label>
                                PassWord :
                                <input
                                    id="password"
                                    ref={passwordElements}
                                    type="text"
                                    required
                                />
                            </label>

                            <button
                                className="SignForm_button"
                                onClick={async (evt) => {
                                    evt.preventDefault();
                                    let waitingFetch = await singIn(
                                        emailElements.current.value,
                                        passwordElements.current.value
                                    );
                                    let signInToken = await waitingFetch;

                                    dispatch(replacementTodo(signInToken));
                                    let awaitFetch = await getAllOfficersreq();
                                    let getAllOfficersr = await awaitFetch;

                                    dispatch(
                                        allOfficersTodo(
                                            getAllOfficersr.officers
                                        )
                                    );

                                    //////
                                    let awaitFetch2 = await getAllCases();
                                    let getAllCasesR = await awaitFetch2;

                                    dispatch(allCaseTodo(getAllCasesR));

                                    navigate("/");
                                }}
                            >
                                Войти
                            </button>
                        </form>
                    </>
                )}
            </div>
        </>
    );
}

export default SignForm;
