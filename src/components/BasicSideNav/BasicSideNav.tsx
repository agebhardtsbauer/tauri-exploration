import React from "react";
import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { SideNavItem } from "../SideNavItem";

type SubRoutes = Record<string, string>;

interface RouteEntry {
  name: string;
  route: string;
  subRoutes?: RouteEntry[];
}

interface Props {
  navItems: RouteEntry[];
}

function BasicSideNav({ navItems }: Props) {
  const location = useLocation();
  let depth = 0;

  const drawer = (
    <>
      <List>
        {navItems.map((navItem) => (
          // <div key={navItem.route}>
          //   <ListItemButton
          //     component={Link}
          //     to={navItem.route}
          //     sx={{
          //       backgroundColor: location.pathname.startsWith(navItem.route)
          //         ? "lightblue"
          //         : "transparent",
          //       color: location.pathname.startsWith(navItem.route)
          //         ? "black"
          //         : "black",
          //     }}
          //   >
          //     <ListItemText primary={navItem.name} />
          //   </ListItemButton>
          //   {navItem.subRoutes ? navItem.subRoutes.map((subRoute) => (
          //     <ListItemButton
          //       component={Link}
          //       to={subRoute.route}
          //       sx={{
          //         backgroundColor: location.pathname.startsWith(subRoute.route)
          //           ? "light blue"
          //           : "transparent",
          //         color: location.pathname.startsWith(subRoute.route)
          //           ? "black"
          //           : "black",
          //       }}
          //     >
          //       <ListItemText primary={subRoute.name} />
          //     </ListItemButton>
          //   )) : null
          //   }
          // </div>
          <SideNavItem navItem={navItem} depth={depth} />
        ))}
      </List>
    </>
  )
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: "240px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "240px",
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );

};

export default BasicSideNav;
