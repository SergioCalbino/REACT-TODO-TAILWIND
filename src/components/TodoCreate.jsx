import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    //Logica: El setTitle controla lo que ingrsamos en el input. Sin embargo para agregar la tarea, se llama al createTodo que es la props que esta en app que agrega un titulo. Justamente ese titulo es el que recibe en este componente y lo ejecuta en app
    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            return setTitle("");
        } else {
            // Create a new todo with the entered title and add it to our list of todos
            createTodo(title);
            setTitle("");
        }
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="flex gap-4 items-center bg-white rounded-md overflow-hidden py-4 px-4 dark:bg-gray-800"
        >
            <span className="h-5 w-5 rounded-full border-2 inline-block"></span>
            <input
                className="w-full text-gray-400 outline-none dark:bg-gray-800"
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
