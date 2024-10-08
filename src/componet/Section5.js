import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { FaGreaterThan } from "react-icons/fa";

function Section5() {
    return (
        <Box sx={{ backgroundColor: "#01010F", padding: "20px" }}>
            <Container>
                <Box sx={{ color: '#F67A45', fontFamily: "teko", fontSize: "30px", textAlign: 'center', paddingTop: "50px" }}>
                    Trainer
                </Box>
                <Box>
                    <Typography sx={{
                        color: 'white',
                        fontFamily: 'TEKO',
                        fontSize: "60px",
                        fontWeight: "900",
                        textAlign: 'center',
                        paddingTop: "10px"
                    }}>
                        Our Trainer
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: "10px", marginBottom: "10px" }}>
                    <Box sx={{ backgroundColor: 'white', width: "80px", height: "2px" }}></Box>
                    <Box sx={{
                        color: 'black',
                        fontFamily: 'TEKO',
                        fontSize: "60px",
                        fontWeight: "900",
                        margin: "0px 10px",
                        textShadow: '1px 0 #F67A45,-1px 0 #F67A45,0 1px #F67A45,0 -1px #F67A45,1px 1px #F67A45,-1px -1px #F67A45,1px -1px #F67A45,-1px 1px #F67A45',
                    }}>
                        MALE
                    </Box>
                    <Box sx={{ backgroundColor: 'white', width: "80px", height: "2px" }}></Box>
                </Box>

                <Grid container spacing={3} sx={{ marginTop: "20px" }}>
                    {[
                        { name: "John Wick C.", role: "Co-Founder", imgSrc: "https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/trainer-details-img.png" },
                        { name: "Emily Thompson", role: "Co-Founder", imgSrc: "https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/team_2.jpg" },
                        { name: "Alex Ramirez", role: "Co-Founder", imgSrc: "https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/team_3.jpg" }
                    ].map((trainer, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <img src={trainer.imgSrc} alt={trainer.name} width="100%" />
                            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px", alignItems: "center" }}>
                                <Box>
                                    <Typography sx={{
                                        color: "white", fontFamily: 'TEKO',
                                        fontSize: "32px", fontWeight: "bold"
                                    }}>
                                        {trainer.name}
                                    </Typography>
                                    <Typography sx={{ fontFamily: "Vazirmatn", color: "white" }}>
                                        {trainer.role}
                                    </Typography>
                                </Box>
                                <Button sx={{ padding: "10px 20px", color: "white", backgroundColor: "#F67A45", borderRadius: "10px" }}>
                                    read more
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: "60px", marginBottom: "10px" }}>
                    <Box sx={{ backgroundColor: 'white', width: "80px", height: "2px" }}></Box>
                    <Box sx={{
                        color: 'black',
                        fontFamily: 'TEKO',
                        fontSize: "60px",
                        fontWeight: "900",
                        margin: "0px 10px",
                        textShadow: '1px 0 #F67A45,-1px 0 #F67A45,0 1px #F67A45,0 -1px #F67A45,1px 1px #F67A45,-1px -1px #F67A45,1px -1px #F67A45,-1px 1px #F67A45',
                    }}>
                        FEMALE
                    </Box>
                    <Box sx={{ backgroundColor: 'white', width: "80px", height: "2px" }}></Box>
                </Box>

                <Grid container spacing={3} sx={{ marginTop: "30px" }}>
                    {[
                        { name: "Jillian Michaels", role: "Co-Founder", imgSrc: "https://i.pinimg.com/564x/51/68/8e/51688e0fcda47cae542c2f48f07435ef.jpg" },
                        { name: "Cassey Ho", role: "Co-Founder", imgSrc: "https://i.pinimg.com/564x/17/95/fc/1795fcd4500681fee233c929031cb55b.jpg" },
                        { name: "Chalene Johnson", role: "Co-Founder", imgSrc: "https://i.pinimg.com/564x/c9/bc/a8/c9bca8cb67254a5c868e034ccb2c8577.jpg" }
                    ].map((trainer, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box sx={{
                                backgroundImage: `url(${trainer.imgSrc})`,
                                width: "100%",
                                height: "460px",
                                backgroundSize: "cover",
                                backgroundPosition: "center center"
                            }} />
                            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px", alignItems: "center" }}>
                                <Box>
                                    <Typography sx={{
                                        color: "white", fontFamily: 'TEKO',
                                        fontSize: "32px", fontWeight: "bold"
                                    }}>
                                        {trainer.name}
                                    </Typography>
                                    <Typography sx={{ fontFamily: "Vazirmatn", color: "white" }}>
                                        {trainer.role}
                                    </Typography>
                                </Box>
                                <Button sx={{ padding: "10px 20px", color: "white", backgroundColor: "#F67A45", borderRadius: "10px" }}>
                                    read more
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
}

export default Section5;
