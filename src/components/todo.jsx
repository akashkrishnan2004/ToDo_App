import "./todo.css"
import { useState } from "react";

export default function TodoApp() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = (event) => {
    if (newTodo.trim()) {
      setTodo([...todo, newTodo]);
      setNewTodo("");
    }
    console.log(todo);
  };

  const handleDeleteTodo = (index) => {
    setTodo(todo.filter((items, itemsIndex) => itemsIndex != index));
  };

  return (
    <div className="todo-body">
      <h1>ToDo App</h1>
      <input
        type="text"
        placeholder="Enter todo here"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button className="addTodoBtn" onClick={handleAddTodo}>Add ToDo</button>
      {todo.length > 0 ? (
        <ul>
          {todo.map((itemsData, index) => (
            <li key={index}>
              {itemsData}
              <button className="deleteTodoBtn" onClick={() => handleDeleteTodo(index)}>
                Delete ToDo
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos added</p>
      )}
    </div>
  );
}


// import { useEffect, useState } from "react";
// export default function TodoApp() {
//   const [todos, setTodos] = useState([]);

//   // Load todos from local storage on component mount
//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem("Todos")) || [];
//     setTodos(storedTodos);
//   }, []);

//   // Save todos to local storage when updated
//   useEffect(() => {
//     if (todos.length > 0) {
//       localStorage.setItem("Todos", JSON.stringify(todos));
//     }
//   }, [todos]);

//   const [newTodo, setNewTodo] = useState("");

//   const handleInputChange = (event) => {
//     setNewTodo(event.target.value);
//   };

//   const handleAddTodo = (event) => {
//     event.preventDefault();
//     if (newTodo.trim()) {
//       setTodos((prevTodos) => {
//         const updatedTodos = [...prevTodos, newTodo];
//         localStorage.setItem("Todos", JSON.stringify(updatedTodos)); // Save instantly
//         return updatedTodos;
//       });
//       setNewTodo(""); // Clear input
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     setTodos((prevTodos) => {
//       const updatedTodos = prevTodos.filter((_, itemsIndex) => itemsIndex !== index);
//       localStorage.setItem("Todos", JSON.stringify(updatedTodos)); // Save updated list
//       return updatedTodos;
//     });
//   };

//   return (
//     <>
//       <h1>ToDo App</h1>
//       <input
//         type="text"
//         placeholder="Enter todo here"
//         value={newTodo}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleAddTodo}>Add ToDo</button>

//       {todos.length > 0 ? (
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>
//               {todo}
//               <button onClick={() => handleDeleteTodo(index)}>Delete ToDo</button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No todos added</p>
//       )}
//     </>
//   );
// }
