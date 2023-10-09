import { useRef, useState } from "react";
import { report, officersReportReq, getAllCases } from "./request";
import { addTodo, replacementTodo, allCaseTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";

function PReport({ signintoken }) {
    const ownerFullNameElements = useRef();
    const licenseNumberElements = useRef();
    const typeElements = useRef();
    const colorElements = useRef();
    const dateElements = useRef();
    const descriptionElements = useRef();
    const OfficersId = useRef();
    const dispatch = useDispatch();
    const retrievedFromStore = useSelector((state) => state.todo.tasks);
    console.log(retrievedFromStore, "это все из стора");

    return (
        <>
            {/* Получение и проверка статуса из хранилища НО ПОЛУЧИТЬ НУЖНО ID сотрудника*/}
            <form>
                <label>
                    ФИО клиента (обязательное поле) :
                    <input
                        id="ownerFullNameElements"
                        ref={ownerFullNameElements}
                        type="text"
                        required
                    />
                </label>

                <label>
                    Номер лицензии (обязательное поле) :
                    <input
                        id="licenseNumberElements"
                        ref={licenseNumberElements}
                        type="text"
                        required
                    />
                </label>

                <label>
                    Цвет велосипеда :
                    <input
                        id="colorElements"
                        ref={colorElements}
                        type="text"
                        required
                    />
                </label>

                <label>
                    Дата кражи :
                    <input
                        id="dateElements"
                        ref={dateElements}
                        type="text"
                        required
                    />
                </label>

                <label>
                    Дополнительная информация :
                    <input
                        id="descriptionElements"
                        ref={descriptionElements}
                        type="text"
                        required
                    />
                </label>

                <label>Тип велосипеда:</label>

                <select
                    name="typeElements"
                    id="typeElements"
                    ref={typeElements}
                >
                    <option value="sport">sport</option>
                    <option value="general">general</option>
                </select>

                {retrievedFromStore[0].text.data.user.approved !== false ? (
                    <>
                        <label>Список одобренных сотрудников:</label>
                        <select
                            name="OfficersId"
                            id="OfficersId"
                            ref={OfficersId}
                        >
                            {retrievedFromStore[2].text.map(
                                (k) =>
                                    k.approved === true && (
                                        <option value={k["_id"]}>
                                            {k["lastName"]} {k["firstName"]}
                                        </option>
                                    )
                            )}
                        </select>
                    </>
                ) : (
                    ""
                )}

                <button
                    onClick={async (evt) => {
                        evt.preventDefault();
                        if (
                            retrievedFromStore[0].text.data.user.approved !==
                            false
                        ) {
                            officersReportReq(
                                ownerFullNameElements.current.value,
                                licenseNumberElements.current.value,
                                typeElements.current.value,
                                colorElements.current.value,
                                dateElements.current.value,
                                descriptionElements.current.value,
                                OfficersId.current.value
                            );
                            console.log(
                                OfficersId.current.value,
                                "офицерский запрос"
                            );
                        } else {
                            report(
                                ownerFullNameElements.current.value,
                                licenseNumberElements.current.value,
                                typeElements.current.value,
                                colorElements.current.value,
                                dateElements.current.value,
                                descriptionElements.current.value
                            );
                            console.log(" публичный запрос");
                        }

                        ownerFullNameElements.current.value = "";
                        licenseNumberElements.current.value = "";
                        colorElements.current.value = "";
                        dateElements.current.value = "";
                        descriptionElements.current.value = "";

                        setTimeout(async () => {
                            let data;
                            let awitFetch = await getAllCases();
                            data = await awitFetch;
                            dispatch(allCaseTodo(data));
                        }, 1000);
                    }}
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default PReport;
