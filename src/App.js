import React, { useState } from "react";
import Intro from "./Components/Intro";
import Works from "./Components/Works";
import Footer from "./Components/Footer";
import Toggle from "./Components/Toggle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Components/Theme";
import { GlobalStyles } from "./Components/Global";

function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <div className="App">
                <Intro />
                <Works />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
