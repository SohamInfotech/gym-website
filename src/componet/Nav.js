import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const pages = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/About' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' }
];

function Nav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar sx={{
            boxShadow: 'none',
            position: "fixed",
            top: 0,
            backgroundColor: "transparent",
            padding: "0px"
        }}>
            <Container fixed sx={{
                fontFamily: 'Teko',
                border: "1px solid rgba(225,225,225,0.2)",
                backgroundColor: 'black',
                boxShadow: "0px",
                padding: "0px"

            }}>
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                        <img src="./img/logo.png" alt="Logo" width="150px" />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: "#D4B26A" }} />
                        </IconButton>
                        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: "center", width: "100px" }}>
                            <img src="https://wpriverthemes.com/gymfito/wp-content/themes/gymfito/assets/img/logo.svg" alt="Logo" style={{ margin: "auto", width: "120px" }} />
                        </Box>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Link to={page.path} style={{ textDecoration: 'none' }}>
                                        <Typography sx={{
                                            textAlign: 'center', color: "#F67A45", '&:hover': {
                                                color: 'orange',
                                            },
                                            height: "100%"
                                        }}>{page.name}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-evenly" }}>
                        {pages.map((page) => (
                            <Link to={page.path} key={page.name} style={{ textDecoration: 'none' }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        color: 'white',
                                        display: 'block',
                                        '&:hover': {
                                            color: 'orange',
                                        },
                                        height: "100%"
                                    }}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {/* <Tooltip title="Join Now"> */}
                        <Link to={"/Joinus"}>
                            <Button className='button'
                                sx={{
                                    fontWeight: "bold",
                                    height: { lg: "40px", md: "35px", sm: "30px", xs: "25px" },
                                    width: { lg: "140px", md: "120px", sm: "100px", xs: "90px" },
                                    fontSize: { lg: "16px", md: "15px", sm: "14px", xs: "12px" },
                                    backgroundColor: "black",
                                    color: "white",
                                    border: "1px solid #F67A45",
                                    '&:hover': {
                                        backgroundColor: "#B77A3E"
                                    }
                                }}
                            >
                                Join Now
                            </Button>
                        </Link>
                        {/* </Tooltip> */}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Nav;
