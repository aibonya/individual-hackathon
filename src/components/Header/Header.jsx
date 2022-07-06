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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { cartContext } from "../../contexts/cartContext";

const pages = ["Главная", "Продукция", "О Компании", "Новости", "Контакты"];
const settings = ["Профиль", "Аккаунт", "Выйти"];

const Header = () => {
  const { currentUser, logOut } = React.useContext(authContext);
  // console.log(currentUser);
  const { count, getCart } = React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);
  const navigate = useNavigate();
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
      style={{ backgroundColor: "rgb(30,22,23)" }}
      className={"app-bar"}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            onClick={() => navigate("/")}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, width: "125px" }}
          >
            <img
              src="https://allmix.kg/templates/rt_protean/custom/images/logowhite.png"
              width={"100%"}
            />
          </Box>

          <Box
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            style={{
              marginLeft: "15px",
              width: "105px",
              fontSize: "12px",
              lineHeight: "1",
              marginBottom: "0",
              background: "#e42534",
              color: "#f1f1f1",
              borderRadius: "0 0 20px",
              padding: "3px 5px",
            }}
          >
            Стройте свое будущее вместе с нами
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    if (page === "Главная") {
                      navigate("/");
                    }
                    if (page === "Продукция") {
                      navigate("/products");
                    }
                    if (page === "О Компании") {
                      navigate("/about-us");
                    }
                    if (page === "Новости") {
                      navigate("/news");
                    }
                    if (page === "Контакты") {
                      navigate("/contacts");
                    }
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 2,
              width: "125px",
            }}
          >
            <img
              src="https://allmix.kg/templates/rt_protean/custom/images/logowhite.png"
              width={"100%"}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                className="routes"
                key={page}
                onClick={() => {
                  if (page === "Главная") {
                    navigate("/");
                  }
                  if (page === "Продукция") {
                    navigate("/products");
                  }
                  if (page === "О Компании") {
                    navigate("/about-us");
                  }

                  if (page === "Новости") {
                    navigate("/news");
                  }
                  if (page === "Контакты") {
                    navigate("/contacts");
                  }
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton color="inherit" onClick={() => navigate("/cart")}>
            <ShoppingCartIcon />
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Открыть настройки">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              <MenuItem>{currentUser.email}</MenuItem>
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    if (setting === "Выйти") {
                      logOut();
                    }
                    if (setting === "Аккаунт") {
                      navigate("/login");
                    }
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            {/* ==================================== */}

            {/* ==================================== */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
