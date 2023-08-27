import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: Date.now(),
            text: {
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
            },
        },
    ],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.tasks.push({ id: Date.now(), text: action.payload });
        },
        replacementTodo: (state, action) => {
            state.tasks[0] = { id: Date.now(), text: action.payload };
        },
        deleteTodo: (state, action) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
        },
    },
});

export const { addTodo, deleteTodo, replacementTodo } = todoSlice.actions;

export default todoSlice.reducer;
