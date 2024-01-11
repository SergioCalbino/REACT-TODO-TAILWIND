const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="bg-white text-blue-500 p-4 rounded-md flex justify-center gap-4 dark:bg-gray-800">
                <button
                    onClick={() => changeFilter("all")}
                    className={`${
                        filter === "all" && "text-blue-500"
                    } hover:text-gray-400`}
                >
                    All
                </button>
                <button
                    onClick={() => changeFilter("active")}
                    className={`${
                        filter === "active" && "text-blue-500"
                    } hover:text-gray-400`}
                >
                    Active
                </button>
                <button
                    onClick={() => changeFilter("completed")}
                    className={`${
                        filter === "completed" && "text-blue-500"
                    } hover:text-gray-400`}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
