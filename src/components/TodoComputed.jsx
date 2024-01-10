const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="bg-white px-4 py-4 flex justify-between rounded-b-md">
            <span className="text-gray-400">{computedItemsLeft} Item Left</span>
            <button onClick={clearCompleted} className="text-gray-400">Clear Completed</button>
        </section>
    );
};

export default TodoComputed;
