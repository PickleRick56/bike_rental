import { useRef, useState } from "react";
import { singIn, report, authorization } from "./request";

import { addTodo, replacementTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";

function PReport({ signintoken }) {
    const ownerFullNameElements = useRef();
    const licenseNumberElements = useRef();
    const typeElements = useRef();
    const colorElements = useRef();
    const dateElements = useRef();
    const descriptionElements = useRef();
    const OfficersId = useRef();

    const retrievedFromStore = useSelector((state) => state.todo.tasks);
    console.log(retrievedFromStore);

    return (
        <>
            {/* Получение и проверка статуса из хранилища НО ПОЛУЧИТЬ НУЖНО ID сотрудника*/}
            {retrievedFromStore[0].text.status === "OK" ? (
                <div>СТАТУС ОКЭ</div>
            ) : (
                <div>СТАТУС НЕ</div>
            )}

            {/* Получение и проверка статуса из хранилища НО ПОЛУЧИТЬ НУЖНО ID сотрудника*/}
            <form>
                <label>
                    Enter your FullName :
                    <input
                        id="ownerFullNameElements"
                        ref={ownerFullNameElements}
                        type="text"
                        required
                    />
                </label>

                <label>
                    Enter your licenseNumberElements :
                    <input
                        id="licenseNumberElements"
                        ref={licenseNumberElements}
                        type="text"
                        required
                    />
                </label>

                <label>
                    Enter color :
                    <input
                        id="colorElements"
                        ref={colorElements}
                        type="text"
                        required
                    />
                </label>

                <label>
                    Enter date :
                    <input
                        id="dateElements"
                        ref={dateElements}
                        type="text"
                        required
                    />
                </label>

                <label>
                    Enter description :
                    <input
                        id="descriptionElements"
                        ref={descriptionElements}
                        type="text"
                        required
                    />
                </label>

                <label>Choose a type:</label>

                <select
                    name="typeElements"
                    id="typeElements"
                    ref={typeElements}
                >
                    <option value="sport">sport</option>
                    <option value="general">general</option>
                </select>

                <select name="OfficersId" id="OfficersId" ref={OfficersId}>
                    <option value="sport">sport</option>
                    <option value="general">general</option>
                </select>

                <button
                    onClick={(evt) => {
                        evt.preventDefault();

                        report(
                            ownerFullNameElements.current.value,
                            licenseNumberElements.current.value,
                            typeElements.current.value,
                            colorElements.current.value,
                            dateElements.current.value,
                            descriptionElements.current.value
                        );
                    }}
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default PReport;
