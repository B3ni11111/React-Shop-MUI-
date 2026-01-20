import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import theme from "./Theme";
import logo2 from "./assets/logo2.jpg";
import logo from "./assets/logo.jpg";
import ThemeToggle from "./ThemeToggle";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header({
  data,
  navigateToCart,
  navigateToShop,
  navigateToAbout,
  navigateToProfile,
  cartCount = 0,
  themeMode,
  toggleTheme,
}) {
  const pages = [
    { id: 1, lable: "Home", fn: navigateToShop },
    { id: 2, lable: "About", fn: navigateToAbout },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: theme.palette.custom.veryDark,
        mb: 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: 120,
              height: 120,
              objectFit: "contain",
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              navigateToShop();
            }}
          />

          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ m: 0, p: 0 }}
            >
              <MenuIcon sx={{ color: themeMode === "dark" ? "white" : "inherit" }} />
            </IconButton>
            <Box
              component="img"
              src={logo2}
              alt="Logo"
              sx={{
                width: 50,
                height: 50,
                objectFit: "contain",
                cursor: "pointer",
                ml: 0,
              }}
              onClick={(e) => {
                e.preventDefault();
                navigateToShop();
              }}
            />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => {
                    handleCloseNavMenu();
                    if (page.fn) page.fn();
                  }}
                >
                  <Typography>{page.lable}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => {
                  if (page.fn) page.fn();
                }}
                sx={{ my: 2, display: "block" }}
              >
                {page.lable}
              </Button>
            ))}
          </Box>

          {/* Spacer for mobile to push right items to the right */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} />

          <Box
            sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 1 }}
          >
            <Tooltip title="Shopping Cart">
              <IconButton onClick={navigateToCart}>
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon sx={{ color: "white" }} />
                </Badge>
              </IconButton>
            </Tooltip>

            <ThemeToggle mode={themeMode} toggleTheme={toggleTheme} />

            {data && (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar
                      alt={data.userName || "User"}
                      src={data.img ? URL.createObjectURL(data.img) : ""}
                    />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => {
                        handleCloseUserMenu();
                        if (setting === "Profile") navigateToProfile();
                      }}
                    >
                      <Typography>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
