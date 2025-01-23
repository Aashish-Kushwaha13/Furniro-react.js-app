import React, { useState, useEffect } from "react";

const ThemeSelector = () => {
    const [theme, setTheme] = useState(
        typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light"
    );

    useEffect(() => {
    
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme); // localStorage
    }, [theme]);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };

    return (

        <div className="flex justify-center p-4 bg-base-200">
            <div className="dropdown dropdown-top">
                <label tabIndex={0} className="btn m-1">
                    Select Theme
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                    {["light", "dark", "cupcake", "bumblebee", "emerald", "corporate"].map(
                        (themeOption) => (
                            <li key={themeOption}>
                                <button onClick={() => handleThemeChange(themeOption)}>
                                    {themeOption}
                                </button>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>

    );
};

export default ThemeSelector;
