import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

//El parse me pasa el string json lo transforma para que lo lea javascript
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    //Todos con el estado inicial
    const [todos, setTodos] = useState(initialState);
    const [filter, setFilter] = useState("all");

    //cargar los todos
    useEffect(() => {
        //Todo se guarda como string. Por eso lo transformamos en formato json
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    //Funcion para crear todos que se envia por props a TodoCreate
    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        };
        console.log(todos);
        setTodos([...todos, newTodo]);
    };

    //Funcion para eliminar tareas. Esta pasa a Todolista, para luego pasarla a TodoItem porque no tengo un estado global
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    ///Funcion para actualizar tareas. Esta pasa a Todolista, para luego pasarla a TodoItem porque no tengo un estado global

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    //Funcion que cuenta las tareas que estan sin completar
    const computedItemsLeft = () => {
        return todos.filter((todo) => !todo.completed).length;
    };

    //Filtra todos los todo que estan en false
    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const changeFilter = (filter) => {
        setFilter(filter);
    };

    const filterTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };
    return (
        <>
            <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen md:bg-cover dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] ">
                <Header />

                <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                    <TodoCreate createTodo={createTodo} />

                    <DragDropContext onDragEnd={handleDragEnd}>
                        <TodoList
                            todos={filterTodos()}
                            removeTodo={removeTodo}
                            updateTodo={updateTodo}
                        />
                    </DragDropContext>

                    <TodoComputed
                        computedItemsLeft={computedItemsLeft()}
                        clearCompleted={clearCompleted}
                    />

                    <TodoFilter changeFilter={changeFilter} />
                </main>

                {/* footer */}
                <p className="text-center mt-8 dark:text-gray-400">
                    Drag and drop to reorder list
                </p>
            </div>
        </>
    );
};

export default App;
