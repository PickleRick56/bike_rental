import { NavLink } from "react-router-dom";
import { addTodo, replacementTodo, allCaseTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { getAllCases, deleteCaseReq } from "./request";
import { useState, useEffect, useId } from "react";

function AllCase() {
    const [dataAllCase, setDataAllCase] = useState([]);

    const dispatch = useDispatch();
    const retrievedFromStore = useSelector((state) => state.todo.tasks);
    async function waitForCases() {
        let data;
        let awitFetch = await getAllCases();
        data = await awitFetch;
        setDataAllCase(await awitFetch.data);
        dispatch(allCaseTodo(data));
    }

    function deleteCase(e) {
        let a = [];
        dataAllCase.map((k) => {
            if (k["_id"] != e) {
                a.push(k);
            }
        });
        setDataAllCase([...a]);
        deleteCaseReq(e);
        console.log(a);
    }

    return (
        <div>
            <h1> Тут выводим все кейсы</h1>
            <NavLink to="/64e22461059e786f1638d195">
                Детальная страница РЕПОРТА
            </NavLink>
            <button
                onClick={(evt) => {
                    evt.preventDefault();
                    waitForCases();
                }}
            >
                Запросить все события
            </button>

            {dataAllCase.length > 0 ? (
                <div className="allCasesHere">
                    {dataAllCase.map((keys) => (
                        <div id={keys["_id"]} className="example">
                            <NavLink to={`/${keys["_id"]}`} state={{ T: keys }}>
                                {keys.ownerFullName}
                            </NavLink>
                            <button
                                onClick={(evt) => {
                                    evt.preventDefault();
                                    deleteCase(evt.target.parentElement.id);

                                    console.log(evt.target.parentElement.id);
                                }}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                "тут ничего"
            )}
        </div>
    );
}

export default AllCase;
