import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  // using hook for navigation
  const navigate = useNavigate();

  // using redux selector to get data
  const selector = useSelector((state) => state.cart.cartItems);

  // reduce to get the total of items
  const totalItems = selector.reduce(
    (initial, current) => initial + current.quantity,
    0
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#0ccac4" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            The paratha store
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => navigate("/checkout")}
            >
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCartTwoToneIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
