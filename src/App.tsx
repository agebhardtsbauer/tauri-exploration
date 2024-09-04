import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SideNavBar from "./components/SideNav";
import { BasicSideNav } from "./components/BasicSideNav";
import CenPas from "./components/CenPas";
import AngPrime from "./components/AngPrime";
import Embark from "./components/Embark";
import { ThemeProvider, withTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import { CardView } from "./components/CardView";
import { GetPokemon } from "./components/GetPokemon";
import { SudokuGrid } from "./components/SudokuSolver";
// const darkTheme = {
//   palette: {
//     mode: "dark",
//   },
// };
type SubRoutes = Record<string, string>;
interface RouteEntry {
  name: string;
  route: string;
  subRoutes?: RouteEntry[];
}

const navRoutes: RouteEntry[] = [
  {
    name: "Sudoku Solver",
    route: "/sudokusolver",
  },
  {
    name: "CenPas LOL",
    route: "/cenpas",
    subRoutes: [
      {
        name: "Cenpas Subroute",
        route: "/cenpas/somesubroute",
      },
    ],
  },
  {
    name: "Get Pokemon",
    route: "/getpokemon",
  },

  {
    name: "Embark",
    route: "/embark",
    subRoutes: [
      {
        name: "Embakr Subroute",
        route: "/cenpas/somesubroute",
      },
    ],
  },
  {
    name: "AngPrime",
    route: "/angprime",
    subRoutes: [
      {
        name: "Ang Sub1",
        route: "/cenpas/somesubroute",
        subRoutes: [
          {
            name: "Ang Sub2",
            route: "/cenpas/somesubroute",
            subRoutes: [
              {
                name: "Ang Sub3",
                route: "/cenpas/somesubroute",
              },
            ],
          },
        ],
      },
      {
        name: "Prime Sub1",
        route: "/cenpas/somesubroute",
        subRoutes: [
          {
            name: "Prime Sub2",
            route: "/cenpas/somesubroute",
            subRoutes: [
              {
                name: "Prime Sub3",
                route: "/cenpas/somesubroute",
              },
            ],
          },
        ],
      },
      {
        name: "AngPrime Subroute",
        route: "/cenpas/somesubroute",
      },
      {
        name: "AngPrime Subroute",
        route: "/cenpas/somesubroute",
      },
    ],
  },
];

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
        <BasicSideNav navItems={navRoutes} />
        <Routes>
          <Route
            path="/sudokusolver"
            element={<SudokuGrid />}
          />
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
          <Route
            path="/cenpas/somesubroute"
            element={<CardView />}
          />
          <Route
            path="/getpokemon"
            element={<GetPokemon />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
