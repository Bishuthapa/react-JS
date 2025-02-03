import { useState } from 'react';


const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        },
    ]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: todos.length + 1, todo, completed: false }]);
    };

    const updateTodo = (id, updatedTodo) => {
        setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            <div className="app">
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
        </TodoProvider>
    );
};

export default App;
