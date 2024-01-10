import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <>
            <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
                <header className="container mx-auto px-4 p-8">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-semibold tracking-[0.3em] uppercase text-white">
                            Todo
                        </h1>
                        <button><MoonIcon fill='#fff'/></button>
                    </div>
                    <form className="mt-8 flex gap-4 items-center bg-white rounded-md overflow-hidden py-4 px-4">
                        <span className="h-5 w-5 rounded-full border-2 inline-block"></span>
                        <input
                            className="w-full text-gray-400 outline-none"
                            type="text"
                            placeholder="Create a new todo..."
                        />
                    </form>
                </header>

                <main className="container mx-auto mt-8 px-4">
                    <div className="bg-white rounded-md">
                        <article className="flex gap-4 py-4 border-b border-gray-400 px-4">
                            <button className="flex-none h-5 w-5 rounded-full border-2 inline-block"></button>
                            <p className="text-gray-600 grow">
                                Complete online Javascript curse in blueweb
                            </p>
                            <button className="flex-none">
                                <CrossIcon />
                            </button>
                        </article>
                        <article className="flex gap-4 py-4 border-b border-gray-400 px-4">
                            <button className="flex-none h-5 w-5 rounded-full border-2 inline-block"></button>
                            <p className="text-gray-600 grow">
                                Complete online Javascript curse in blueweb
                            </p>
                            <button className="flex-none">
                                <CrossIcon />
                            </button>
                        </article>
                        <article className="flex gap-4 py-4 border-b border-gray-400 px-4">
                            <button className="flex-none h-5 w-5 rounded-full border-2 inline-block"></button>
                            <p className="text-gray-600 grow">
                                Complete online Javascript curse in blueweb
                            </p>
                            <button className="flex-none">
                                <CrossIcon />
                            </button>
                        </article>

                        <section className="px-4 py-4 flex justify-between">
                            <span className="text-gray-400">5 items left</span>
                            <button className="text-gray-400">
                                Clear Completed
                            </button>
                        </section>
                    </div>
                </main>

                <section className="container mx-auto px-4 mt-8">
                    <div className="bg-white p-4 rounded-md flex justify-center gap-4">
                        <button className="text-blue-600">All</button>
                        <button className="hover:text-blue-600">Active</button>
                        <button className="hover:text-blue-600">Completed</button>
                    </div>
                </section>

                <p className="text-center mt-8">Drag and drop to reorder list</p>
            </div>
        </>
    );
};

export default App;
