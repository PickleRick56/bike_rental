import { NavLink } from "react-router-dom";
import { addTodo, replacementTodo, allCaseTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { singIn, report, authorization, getAllCases } from "./request";
import { useState, useEffect, useId } from "react";

function AllCase({ prop }) {
    const [data, setData] = useState([]);
    const messageId = `message${useId()}`;
    const dispatch = useDispatch();
    const retrievedFromStore = useSelector((state) => state.todo.tasks);
    async function waitForCases() {
        let data;
        let awitFetch = await getAllCases();
        data = await awitFetch;
        setData(await awitFetch.data);
        dispatch(allCaseTodo(data));
        console.log(retrievedFromStore);
    }

    return (
        <div>
            <h1> Тут выводим все кейсы</h1>
            <NavLink to="/detailCase">Детальная страница РЕПОРТА</NavLink>
            <button
                onClick={() => {
                    waitForCases();
                }}
            >
                Запросить все события
            </button>

            {data.length > 0 ? (
                <div className="allCasesHere">
                    {data.map((keys) => (
                        <div id={keys["_id"]} className="example">
                            <NavLink to="/detailCase" state={{ T: keys }}>
                                {keys.ownerFullName}
                            </NavLink>
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
