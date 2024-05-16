import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavBar from "./components/SideNav";
import CenPas from "./components/CenPas";
import AngPrime from "./components/AngPrime";
import Embark from "./components/Embark";

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
          <Route
            path="/embark"
            element={<Embark />}
          />
          <Route
            path="/angprime"
            element={<AngPrime />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
