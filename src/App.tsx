import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavBar from "./components/SideNav";
import CenPas from "./components/CenPas";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <Router>
        <SideNavBar />
        <Routes>
          <Route
            path="/cenpas"
            element={<CenPas />}
          />
          {/* <Route
            path="/embark"
            element={<Embark />}
          />
          <Route
            path="/angprime"
            element={<AngPrime />}
          /> */}
        </Routes>
        {/* <div className="container">
          <p>Click on the Tauri, Vite, and React logos to learn more.</p>

          <form
            className="row"
            onSubmit={(e) => {
              e.preventDefault();
              greet();
            }}
          >
            <input
              id="greet-input"
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Enter a name..."
            />
            <button type="submit">Greet</button>
          </form>

          <p>{greetMsg}</p>
        </div> */}
      </Router>
    </>
  );
}

export default App;
