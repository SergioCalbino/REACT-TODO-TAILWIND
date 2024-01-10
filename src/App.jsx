import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialState = [
    { id: 1, title: "Complete Online Javascript Course", completed: true },
    { id: 2, title: "Buy Groceries", completed: false },
    { id: 3, title: "10 minits meditation", completed: false },
    { id: 4, title: "Pick up groseries", completed: true },
    { id: 5, title: "Complete Todo app on Frontend mentors", completed: false },
];

const App = () => {
    //Todos con el estado inicial
    const [todos, setTodos] = useState(initialState);
    const [filter, setFilter] = useState("all");

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

    return (
        <>
            <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen md:bg-cover">
                <Header />

                <main className="container mx-auto mt-8 px-4">
                    <TodoCreate createTodo={createTodo} />

                    <TodoList
                        todos={filterTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />

                    <TodoComputed
                        computedItemsLeft={computedItemsLeft()}
                        clearCompleted={clearCompleted}
                    />

                    <TodoFilter changeFilter={changeFilter} />
                </main>

                {/* footer */}
                <p className="text-center mt-8">
                    Drag and drop to reorder list
                </p>
            </div>
        </>
    );
};

export default App;
