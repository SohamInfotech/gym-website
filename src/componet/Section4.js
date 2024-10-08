import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import TimerSharpIcon from '@mui/icons-material/TimerSharp';
import { TbDeviceImac } from "react-icons/tb";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";

function Section4() {
    return (
        <Box sx={{ 
            backgroundImage: 'url(./img/bgimg.jpg)', 
            backgroundSize: "cover", 
          padding:"30px" ,
            backgroundAttachment: 'fixed', 
            backgroundColor: "rgba(225,255,255)", 
            backgroundBlendMode: "multiply" 
        }}>
            <Container sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                <Box sx={{ width: "100%", color: "white", textAlign: 'center' }}>
                    <Box sx={{ fontFamily: "sans-serif", fontSize: '22px', fontWeight: '500' }}>
                        Not Only a Gym
                    </Box>
                    <Box sx={{ width: '9%', height: '1px', backgroundColor: "white", margin: "auto", marginTop: "7px" }} />
                    <Box sx={{ 
                        width: "65%", 
                        margin:"auto",
                        fontFamily: 'sans-serif', 
                        fontWeight: '200', 
                        lineHeight: "26px", 
                        marginTop: "10px", 
                        fontSize: "20px", 
                        textAlign: 'center' 
                    }}>
                        Gym Base is not just a gym, we have an indoor swimming pool, sauna zone, two indoor team courts.
                        Check what else we offer for our members.
                    </Box>
                </Box>

                <Grid container sx={{ width: "100%", color: 'white', alignItems: "center", justifyContent: 'center', mt: 2 }}>
                    {[
                        { icon: <TimerSharpIcon style={{ fontSize: "45px" }} />, text: "Workout plans tailored to your needs" },
                        { icon: <TbDeviceImac style={{ fontSize: "45px" }} />, text: "Access to the client's panel to your needs" },
                        { icon: <MdOutlineSlowMotionVideo style={{ fontSize: "45px" }} />, text: "Social media integration" },
                        { icon: <TiSocialInstagram style={{ fontSize: "45px" }} />, text: "Social media integration" },
                        { icon: <TimerSharpIcon style={{ fontSize: "45px" }} />, text: "Battle tournaments" },
                        { icon: <TbDeviceImac style={{ fontSize: "45px" }} />, text: "Individual trainings" },
                        { icon: <MdOutlineSlowMotionVideo style={{ fontSize: "45px" }} />, text: "Playing fields for team sports" },
                        { icon: <TiSocialInstagram style={{ fontSize: "45px" }} />, text: "Diverse member plans" },
                    ].map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index} sx={{ 
                            border: '1px solid rgba(225,225,225,0.6)', 
                            padding: "10px", 
                            ':hover': { backgroundColor: 'white', color: "black", transition: '0.5s' } 
                        }}>
                            <Box sx={{ height: "170px", textAlign: 'center' }}>
                                {item.icon}
                                <Box sx={{ marginTop: '20px', fontSize: "18px", marginBottom: "20px" }}>
                                    {item.text}
                                </Box>
                            </Box>
                        </Grid>
                    ))}

                    <Grid item xs={12} sx={{ textAlign: 'center', mt: 4 }}>
                        <Button sx={{
                            color: "black", 
                            padding: "10px 30px", 
                            backgroundColor: 'transparent', 
                            border: "1px solid white", 
                            width: '20%', 
                            color: "white", 
                            ':hover': { backgroundColor: "white", color: "black", transition: '0.5s' } 
                        }}>
                            Contact Us
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Section4;
