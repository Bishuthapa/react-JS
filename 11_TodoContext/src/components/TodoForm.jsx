import  { useState } from 'react';
import { useTodo } from '../context';
function TodoForm() {
  // State to manage the input value for the new to-do
  const [todo, setTodo] = useState("");
  // Accessing the addTodo function from the useTodo hook
  const { addTodo } = useTodo();
  // Event handler for adding a new to-do
  const add = (e) => {
    e.preventDefault();
    // If the input is empty, do not proceed
    if (!todo) return;
    // Call the addTodo function to add a new to-do with the current input value
    addTodo({ todo, completed: false });
    // Clear the input field after adding the to-do
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      {/* Input field for entering the new to-do */}
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      
      {/* Button to submit the new to-do */}
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}
export default TodoForm;