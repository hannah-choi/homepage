import React, { useState } from "react";
import Intro from "./Components/Intro";
import Intro2 from "./Components/Intro2";
import Works from "./Components/Works";
import Footer from "./Components/Footer";
import History from "./Components/History";
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
            <div className="App">
                <div className="wrapper">
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                    <Intro />
                    <Intro2 />
                    <Works />
                    <Footer />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
