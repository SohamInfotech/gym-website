import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TiSocialTumbler } from "react-icons/ti";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Box sx={{ paddingTop: "50px", backgroundImage: "url(https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/footer_bg_1.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", padding: "40px 0" }}>
            <Container sx={{ color: "white", textAlign: "center" }}>
                <Box>
                    <img src="./img/logo.png" alt="Logo" width="150px" />
                </Box>
                <Typography sx={{ fontSize: "16px", maxWidth: "670px", margin: "35px auto" }}>
                    Treadmills, stationary bikes, and elliptical machines are commonly used for cardiovascular workouts, helping to improve endurance, burn calories, and enhance heart health.
                </Typography>
                <Box sx={{ border: "1px solid #282323", padding: "20px", maxWidth: "670px", margin: "35px auto", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    {['/', '/About', '/blog', '/contact'].map((path, index) => (
                        <Link to={path} key={index} style={{ textDecoration: "none", color: "white" }}>
                            <Typography sx={{ padding: "0px 35px", fontSize: "20px", ":hover": { color: "#F67A45", transition: "all 0.4s" } }}>
                                {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                            </Typography>
                        </Link>
                    ))}
                </Box>
            </Container>
            <Box sx={{ width: "100%", height: "100px", backgroundColor: "black", marginTop: "50px", color: "white", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%", maxWidth: "400px" }}>
                    <FaInstagram cursor={"pointer"} />
                    <FaFacebookF cursor={"pointer"} />
                    <FaTwitter cursor={"pointer"} />
                    <FaLinkedin cursor={"pointer"} />
                    <TiSocialTumbler cursor={"pointer"} />
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
