import React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

type SubRoutes = Record<string, string>;

interface RouteEntry {
  name: string;
  main: string;
  subRoutes: SubRoutes;
}

type MyPaths = Record<string, RouteEntry>;

const navRoutes: MyPaths = {
  cenpas: {
    name: "CenPas",
    main: "/cenpas",
    subRoutes: {
      someSubRoute: "/cenpas/somesubroute",
    },
  },
  embark: {
    name: "Embark",
    main: "/embark",
    subRoutes: {
      someSubRoute: "/embark/somesubroute",
    },
  },
  angprime: {
    name: "AngPrime",
    main: "/angprime",
    subRoutes: {
      someSubRoute: "/angprime/somesubroute",
    },
  },
};

const SideNavBar: React.FC = () => {
  const location = useLocation();

  const navKeys = Object.keys(navRoutes);

  return (
    <List>
      {navKeys.map((navKey: string) => {
        const navItems: RouteEntry = navRoutes[navKey];
        return (
          <div key={navKey}>
            <ListItemButton
              component={Link}
              to={navItems.main}
              sx={{
                backgroundColor: location.pathname.startsWith(navItems.main)
                  ? "blue"
                  : "transparent",
              }}
            >
              <ListItemText primary={navItems.name} />
            </ListItemButton>
            {Object.entries(navItems.subRoutes).map(([key, route]) => (
              <ListItemButton
                key={key}
                component={Link}
                to={route}
                sx={{
                  backgroundColor:
                    location.pathname === route ? "lightblue" : "transparent",
                }}
              >
                <ListItemText primary={key} />
              </ListItemButton>
            ))}
          </div>
        );
      }
      )}

    </List>
  )
};

export default SideNavBar;
