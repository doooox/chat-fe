import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChatIcon from "@mui/icons-material/Chat";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NAVIGATION_ROUTES } from "../utils/static";

export default function Navigation() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} maxWidth="xl">
        <AppBar position="absolute" style={{ background: "#4EAC6D" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Box>
                Chat App
                <ChatIcon sx={{ m: 0.5 }} />
              </Box>
            </Typography>
            {NAVIGATION_ROUTES.map((route) => (
              <Button color="inherit" key={route.name} href={route.path}>
                {route.name}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="xl" style={{ marginTop: "8rem" }}>
        <Outlet />
      </Container>
    </>
  );
}
