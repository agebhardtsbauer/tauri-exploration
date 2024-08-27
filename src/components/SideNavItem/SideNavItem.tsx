import React from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

interface RouteEntry {
  name: string;
  route: string;
  subRoutes?: RouteEntry[];
}

interface Props {
  navItem: RouteEntry;
  depth: number;
}



function SideNavItem({ navItem, depth }: Props) {
  return (
    <>
      <ListItemButton
        component={Link}
        to={navItem.route}
        sx={{
          backgroundColor: location.pathname.startsWith(navItem.route)
            ? "lightblue"
            : "transparent",
          color: location.pathname.startsWith(navItem.route)
            ? "black"
            : "black",
        }}
      >
        <ListItemText sx={{ ml: 2 * depth }} primary={navItem.name} />
      </ListItemButton>
      {navItem.subRoutes ? navItem.subRoutes.map((subRoute) => (
        <SideNavItem navItem={subRoute} depth={depth + 1} />
      )) : null}
    </>
  );
}

export default SideNavItem;
