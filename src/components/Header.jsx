import { useEffect, useRef, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

//Con esto hago que al refrescar la pagina mantenga el modo oscuro o claro
const initialStateDarkMode = localStorage.getItem('theme') === 'dark'

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    //El useRef se utilizad para controlar ciertas propiedades de las etiquetas que controla React. Por ejemplo si quiero cambiar el color de algo, o bien cambiar el textp
    const refHeader = useRef(null)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme', 'dark')
            // refHeader.current.classList.add('bg-red-800')
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem('theme', 'light')

        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 p-8" ref={refHeader}>
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold tracking-[0.3em] uppercase text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
