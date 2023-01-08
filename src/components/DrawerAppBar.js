import * as React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBarUi from "./SearchBarUi";
import BasicModal from "./BasicModal";

function DrawerAppBar({ window, itemsCart, setItemsCart }) {
  let badge = [...new Set(itemsCart)];
  const [OpenModal, setOpenModal] = React.useState(false);
  const handleCart = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <IconButton
        href="/"
        size="medium"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <StorefrontIcon />
      </IconButton>
      <Typography
        component="div"
        sx={{
          fontSize: "0.8rem",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginRight: "2%"
        }}
      >
        Saber Shop
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Deals of the Day" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window;
  return (
    <Box sx={{ width: "100" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#d3d9e3" }}
        position="absolute"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon
              sx={{
                color: "black"
              }}
            />
          </IconButton>
          <IconButton
            href="/"
            size="medium"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <StorefrontIcon
              sx={{
                color: "black"
              }}
            />
          </IconButton>
          <Typography
            component="div"
            sx={{
              color: "black",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              marginRight: "0.2rem"
            }}
          >
            Saber Shop
          </Typography>

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                justifyContent: "space-around",
                gap: "0.2rem",
                flex: 1,
                marginLeft: "10px"
              }
            }}
          >
            <NavLink
              to="/DealsOfTheDay"
              style={{
                textDecoration: "none",
                flexWrap: "nowrap"
              }}
            >
              <Button
                sx={{
                  color: "#173769"
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "18px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    flexShrink: 1
                  }}
                >
                  Deals of the Day
                </Typography>
              </Button>
            </NavLink>
            <NavLink
              to="/About"
              style={{
                textDecoration: "none"
              }}
            >
              <Button
                sx={{
                  color: "#173769"
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "18px",
                    fontSize: "1rem",
                    fontWeight: "bold"
                  }}
                >
                  About
                </Typography>
              </Button>
            </NavLink>
            <NavLink
              to="/Contact"
              style={{
                textDecoration: "none"
              }}
            >
              <Button
                sx={{
                  color: "#173769"
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "18px",
                    fontSize: "1rem",
                    fontWeight: "bold"
                  }}
                >
                  Contact
                </Typography>
              </Button>
            </NavLink>
          </Box>
          <SearchBarUi />
          <Badge badgeContent={badge.length} color="primary">
            <IconButton
              onClick={handleCart}
              size="small"
              edge="start"
              sx={{ color: "#9658bf" }}
              aria-label="cart"
            >
              <ShoppingCartIcon sx={{ color: "#336B87" }} />
            </IconButton>
          </Badge>
          <BasicModal
            openModal={OpenModal}
            itemsCart={itemsCart}
            handleCloseM={handleCloseModal}
            setItemsCart={setItemsCart}
          />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240"
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
