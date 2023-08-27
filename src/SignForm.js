import { useRef } from "react";
import { singIn, BigButton } from "./request";

function SignForm({ setSignInToken }) {
    const emailElements = useRef();
    const passwordElements = useRef();

    return (
        <>
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

                        setSignInToken(
                            await singIn(
                                emailElements.current.value,
                                passwordElements.current.value
                            )
                        );
                    }}
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default SignForm;
