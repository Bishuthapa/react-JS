import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id : 1, text: "Just do it"}]
}

export todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo : (state, action) => {
            state.todos.push
        },
        removeTodo : (state, action) => {}
    }
})