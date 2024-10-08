import React from 'react';
import Titels from './Titels';
import Nav from './Nav';
import Footer from './Footer';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Carddata from './Card';

const blogPosts = [
    {
        imgSrc: "https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/blog-detials-top-1-2.png",
        title: "MIND OVER MATTER: THE IMPORTANCE OF HEALTH IN FITNESS",
        description: "Consistency is key when it comes to reaching your fitness goals. Our blog is here to provide you with tips,…"
    },
    {
        imgSrc: "https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/blog-detials-top-1-4.png",
        title: "STRATEGIES FOR OVERCOMING FITNESS PLATEAUS AND ACHIEVING",
        description: "Cardio is essential for heart health and burning calories. Explore our blog for exciting cardio workouts that can be done…"
    },
    {
        imgSrc: "https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/blog-detials-top-1-5.png",
        title: "FUEL YOUR WORKOUT: A GUIDE TO PRE- AND POST-WORKOUT",
        description: "Recovery is just as important as your workouts. Dive into our blog to learn about the best practices for muscle…"
    },
    {
        imgSrc: "https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/blog-detials-top-1.png",
        title: "FITNESS POTENTIAL: EXPERT TIPS FOR MAXIMIZING EXPERIENCE",
        description: "Welcome to our gym’s official blog! We’re thrilled to have you here as we embark on a journey towards better…"
    }
];

function Blog() {
    return (
        <Box sx={{ backgroundColor: "black" }}>
            <Nav />
            <Titels Name={"Blog"} url={"https://wordpress.themeholy.com/fitkit/wp-content/themes/fitkit/assets/img/breadcumb-thumb.png"} />

            {blogPosts.map((post, index) => (
                <Box sx={{ paddingTop: index === 0 ? "90px" : "70px" }} key={index}>
                    <Container sx={{ border: "1px solid #3e3b3b", padding: "10px" }}>
                        <Grid container sx={{ alignItems: "center", textAlign: "center" }}>
                            <Grid item xs={12} md={3}>
                                <img src={post.imgSrc} alt={post.title} style={{ width: "175px", height: "125px" }} />
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Typography sx={{
                                    fontSize: "28px",
                                    fontFamily: "teko",
                                    fontWeight: "600",
                                    transition: "color 0.1s ease-in-out",
                                    lineHeight: "100%",
                                    marginBottom: "6px",
                                    color: "white",
                                    ":hover": { color: "#F67A45" },
                                    transition: "all 0.5s"
                                }}>
                                    {post.title}
                                </Typography>
                                <Typography sx={{
                                    margin: "0px",
                                    padding: "0px",
                                    fontWeight: "400",
                                    lineheight: "24px",
                                    color: "#E7E7E7",
                                    fontFamily: "sans-serif"
                                }}>
                                    {post.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>


                                <Button className='button'
                                    sx={{
                                        fontWeight: "bold",
                                        height: { lg: "40px", md: "35px", sm: "30px", xs: "25px" },
                                        width: { lg: "140px", md: "130px", sm: "110px", xs: "100px" },
                                        fontSize: { lg: "16px", md: "15px", sm: "14px", xs: "12px" },
                                        backgroundColor: "black",
                                        color: "white",
                                        border: "1px solid #F67A45",
                                        '&:hover': {
                                            backgroundColor: "#B77A3E"
                                        }
                                    }}
                                >
                                    Read More
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            ))}

            <Carddata />
            <Footer />
        </Box>
    );
}

export default Blog;
