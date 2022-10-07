import Wrapper from "./components/Parent";
import Screen from "./components/DisScreen";
import ButtonBox from "./components/AllButtons";
import Button from "./components/Button";
import CalcProvider from "./context/CalcContext";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";


const btnValues = [
  ["C", "+-", "%", "/"],
  [1, 2, 3, "+"],
  [4, 5, 6, "-"],
  [7, 8, 9, "x"],
  [0, ".", "="],
];

export const ThemeContext = createContext('null');

function App() {
  const [theme, setTheme] = useState('light');

const toggleTheme = () => {
    setTheme((curr) =>(curr === 'light' ? 'dark' : 'light'));
  }


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
          <div className="switch">
            <label>{theme ==="light" ? 'Light Mode' : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked= {theme === "dark"}/>
            </div>
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button value={btn} key={i} />
            ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
