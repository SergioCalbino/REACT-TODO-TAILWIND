import { Droppable, Draggable } from "@hello-pangea/dnd";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <>
            <Droppable droppableId="todos">
                {(dropableProvided) => (
                    <div
                        ref={dropableProvided.innerRef}
                        {...dropableProvided.droppableProps}
                        className=" mt-8 bg-white rounded-t-md"
                    >
                        {todos.map((todo, index) => (
                            <Draggable
                                key={todo.id}
                                index={index}
                                draggableId={`${todo.id}`}
                            >
                                {(dragableProvided) => (
                                    <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                        removeTodo={removeTodo}
                                        updateTodo={updateTodo}
                                        ref={dragableProvided.innerRef}
                                        {...dragableProvided.dragHandleProps}
                                        {...dragableProvided.draggableProps}
                                    />
                                )}
                            </Draggable>
                        ))}
                        {dropableProvided.placeholder}
                    </div>
                )}
            </Droppable>
        </>
    );
};

export default TodoList;
