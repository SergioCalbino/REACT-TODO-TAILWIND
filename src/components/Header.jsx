import MoonIcon from "./icons/IconMoon";

const Header = () => {
    return (
        <header className="container mx-auto px-4 p-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold tracking-[0.3em] uppercase text-white">
                    Todo
                </h1>
                <button>
                    <MoonIcon fill="#fff" />
                </button>
            </div>
        </header>
    );
};

export default Header;
