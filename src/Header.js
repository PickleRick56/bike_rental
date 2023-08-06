import { NavLink } from "react-router-dom";

import { addTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";

function Header() {
    const dispatch = useDispatch();
    const retrievedFromStore = useSelector((state) => state.todo.tasks);
    console.log(retrievedFromStore);

    return (
        <div>
            {/* {отправить данные в store по нажатиею накнопку} */}
            <button onClick={() => dispatch(addTodo("dog"))}>click</button>

            <h1>This is the home header</h1>
            <NavLink to="/">Click to view our home page</NavLink>
            <NavLink to="/about">Click to view our about page</NavLink>
            <NavLink to="/contact">Click to view our contact page</NavLink>
        </div>
    );
}

export default Header;
