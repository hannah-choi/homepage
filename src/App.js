import Intro from "./Components/Intro";
import Background from "./Components/Background";
import Works from "./Components/Works";
import Footer from "./Components/Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Components/Theme";
import { GlobalStyles } from "./Components/Global";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="App">
                <Intro />
                <Background />
                <Works />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
