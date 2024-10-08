import { Grade } from '@mui/icons-material'
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Section1() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <div className='bg' style={{ 
                backgroundImage: isMobile ? "url('https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/hero_slider_bg_1-3.png')" : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                paddingTop: isMobile ? '150px' : '0px'
            }}>
                <Grid container spacing={2} sx={{ paddingTop: { xs: '50px', md: '150px' }, position: "relative" }}>
                    <Grid item xs={1} sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column" }}>
                        <Box sx={{ height: "40%", width: "1px", opacity: "0.6", backgroundColor: "white", margin: "10px auto" }}>
                        </Box>
                        <FaXTwitter style={{ color: "white", rotate: "270deg", fontSize: "17px", fontWeight: "700", margin: "10px auto" }} />
                        <FaLinkedinIn style={{ color: "white", rotate: "270deg", margin: "10px auto" }} />
                        <FaFacebookF style={{ color: "white", rotate: "270deg", margin: "10px auto" }} />
                        <Box sx={{ height: "40%", width: "1px", backgroundColor: "white", opacity: "0.6", margin: "10px auto" }}>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5} sx={{ position: { xs: "relative", md: "relative" }, zIndex: "2", top: "0", left: "0" }} >
                        <Box className='text' sx={{ marginLeft: { xs: "10px", md: "20px" }, textAlign: { xs: "center", md: "left" } }} >
                            <Typography className='fs' sx={{ margin: "0px", fontWeight: "600", fontSize: { xs: "40px", sm: "50px", md: "70px", lg: '80px' }, textTransform: 'uppercase', lineHeight: "1", letterSpacing: '0.2', color: 'black', textShadow: '1px 0 #F67A45,-1px 0 #F67A45,0 1px #F67A45,0 -1px #F67A45,1px 1px #F67A45,-1px -1px #F67A45,1px -1px #F67A45,-1px 1px #F67A45' }}>  IGNITE   </Typography>
                            <Typography className='fs' sx={{ margin: "0px", fontSize: { xs: "30px", sm: "40px", md: "60px", lg: '80px' }, fontWeight: "600", fontFamily: 'sans-serif', lineHeight: "1", textTransform: 'uppercase', letterSpacing: '0.5', textShadow: '1px 0 #F67A45,-1px 0 #F67A45,0 1px #F67A45,0 -1px #F67A45,1px 1px #F67A45,-1px -1px #F67A45,1px -1px #F67A45,-1px 1px #F67A45' }}> Transformation</Typography>
                            <h2 className='unite' style={{ margin: "0", fontSize: isMobile ? '40px' : '60px', fontWeight: 'bold', color: isMobile ? 'white' : 'white' }}>& Unite Your Strength
                            </h2>
                            <p className='p' style={{ fontSize: isMobile ? '14px' : '16px', color: isMobile ? 'white' : 'white' }}>Discover fitness excellence at our premier gym. With top-notch {!isMobile && <br />} equipment, expert trainers, and dynamic classes, we're committed to helping you reach your goals. Join us today and unleash your full potential!</p>
                            <Button sx={{ color: "white", padding: "10px 30px", backgroundColor: "#F67A45", marginTop: '30px', width: { xs: '80%', md: '50%' } }}>Contact US</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: isMobile ? "none" : "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: { xs: "30px", md: "0" }
                    }}>
                        <Box
                            sx={{ width: "100%", maxWidth: "500px" }}
                        >
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={false}
                                speed={2000}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                onAutoplayTimeLeft={onAutoplayTimeLeft}
                                className="mySwiper"
                            >
                                <SwiperSlide style={{ scale: "1.2", height: "700px" }}><img src="https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/hero_slider_bg_1-3.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></SwiperSlide>
                                <SwiperSlide style={{ scale: "1.2", height: "700px" }}><img src="https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/hero_slider_bg_2-1.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></SwiperSlide>
                                <SwiperSlide style={{ scale: "1.2", height: "700px" }}><img src="https://i.pinimg.com/564x/f5/eb/0e/f5eb0e8159e192031f560383750dff74.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></SwiperSlide>

                                <div className="autoplay-progress" slot="container-end">
                                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                                        <circle cx="24" cy="24" r="20"></circle>
                                    </svg>
                                    <span ref={progressContent}></span>
                                </div>
                            </Swiper>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}


export default Section1