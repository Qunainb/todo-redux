import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(todoActions.addToDo(input)); // input becomes action.payload
    setInput("");
  }

  return (
    <div className="flex justify-center align-center">
      <form onSubmit={handleSubmit} className="  space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
          placeholder="Enter a Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hober:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
