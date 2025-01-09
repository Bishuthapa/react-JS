import { createContext } from "react";
import { useContext } from "react";


export const TodoContext = createContext({
    //vales
    todos: [
        {
            id: 1,
            todo : " Todo msg",
            completed : false,
        }
    ],
        //methods 

        addTodo : (todo) => {},
        updateTodo : (id, todo) => {},
        deleteTodo : (id) => {},
        toogleComplete : (id) => {}


})

export const useTodo = () =>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;