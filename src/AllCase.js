import { NavLink } from "react-router-dom";
import { allCaseTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { deleteCaseReq } from "./request";

function AllCase() {
    const retrievedFromStore = useSelector((state) => state.todo.tasks);
    const dispatch = useDispatch();

    function deleteCase(e) {
        let data = [];
        retrievedFromStore[1].text.data.map((k) => {
            if (k["_id"] != e) {
                data.push(k);
            }
        });

        dispatch(
            allCaseTodo({
                data: data,
            })
        );

        deleteCaseReq(e);
    }

    return (
        <div>
            <h1> Список сообщений о потере велосипедов </h1>

            {Object.keys(retrievedFromStore[1].text).length !== 0 &&
                retrievedFromStore[1].text.data.length > 0 && (
                    <div className="allCasesHere">
                        {retrievedFromStore[1].text.data.map((keys) => (
                            <div id={keys["_id"]} className="example">
                                <NavLink
                                    to={`/${keys["_id"]}`}
                                    state={{ T: keys }}
                                >
                                    {keys.ownerFullName}
                                </NavLink>
                                <button
                                    onClick={(evt) => {
                                        evt.preventDefault();
                                        deleteCase(evt.target.parentElement.id);
                                    }}
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    );
}

export default AllCase;
