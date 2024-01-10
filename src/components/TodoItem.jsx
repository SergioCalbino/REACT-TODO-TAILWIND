import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    //Este removeTodo viene pasando de componente a componente. Ahora lo puedousar en el boton de eliminar
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 py-4 border-b border-gray-400 px-4">
            <button
                onClick={() => updateTodo(id)}
                className={`flex-none h-5 w-5 rounded-full border-2 ${
                    completed
                        ? " bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                        : "inline-block"
                }`}
            >
                {completed && <IconCheck />}
            </button>
            <p className={`text-gray-600 grow ${completed && "line-through" }`}>{title}</p>
            <button 
                onClick={() => removeTodo(id)}
                className="flex-none">
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItem;
