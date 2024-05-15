import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const SideNavBar: React.FC = () => {
  const drawer = (
    <div>
      <Toolbar />
      <div>
        <List>
          <ListItem
            button
            key="CenPas"
            component={Link}
            to="/cenpas"
          >
            <ListItemText primary="CenPas" />
          </ListItem>
          <ListItem
            button
            key="Embark"
            component={Link}
            to="/embark"
          >
            <ListItemText primary="Embark" />
          </ListItem>
          <ListItem
            button
            key="AngPrime"
            component={Link}
            to="/angprime"
          >
            <ListItemText primary="AngPrime" />
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      ></Box>
    </Box>
  );
};

export default SideNavBar;
