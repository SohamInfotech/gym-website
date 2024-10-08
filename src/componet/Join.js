import React from "react";
import { Grid, Card, Typography, Button, Box, ThemeProvider, createTheme, Container } from "@mui/material";
import Titels from "./Titels";
import Nav from "./Nav";
import Footer from "./Footer";

function Join() {
    const gymImage = "https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/trainer-details-img.png"; // Same image for all plans

    const plans = [
        {
            name: "Free Plan",
            price: 0,
            imgSrc: "https://i0.wp.com/dicasdemusculacao.org/wp-content/uploads/2017/06/treino-de-pernas-betao.png",
            features: ["1-week training", "2 hours daily", "Basic gym setup"],
            unavailableFeatures: ["Advanced gym setup", "Personal trainer"],
            color: "info",
        },
        {
            name: "Starter Plan",
            price: 199,
            imgSrc: "https://i.utilitylifeadvice.com/images/001/image-2297-j.webp",
            features: ["1-month access", "2 hours daily", "Standard gym equipment", "Group classes"],
            unavailableFeatures: ["Personal trainer", "Premium equipment"],
            color: "success",
        },
        {
            name: "Business Plan",
            price: 299,
            imgSrc: "https://fit-volley.ru/wp-content/uploads/zhim-ganteley-na-plechi.jpg",
            features: ["3-month access", "4 hours daily", "Advanced gym equipment", "Group classes", "Personal trainer (3 sessions)"],
            unavailableFeatures: ["Unlimited personal trainer sessions"],
            color: "warning",
        },
        {
            name: "Ultimate Plan",
            price: 350,
            imgSrc: "https://www.periodistadigital.com/wp-content/uploads/2020/09/La-Roca-Dwayne-Johnson.jpg",
            features: ["6-month access", "Unlimited hours", "Premium gym equipment", "Group classes", "Unlimited personal trainer sessions"],
            unavailableFeatures: [],
            color: "error",
        },
    ];

    // Create a custom black theme
    const blackTheme = createTheme({
        palette: {
            mode: 'dark',
            background: {
                default: '#000000', // Black background
                paper: '#1c1c1c', // Dark paper for cards
            },
            text: {
                primary: '#ffffff', // White text color
                secondary: '#aaaaaa',
            },
        },
        typography: {
            allVariants: {
                color: '#ffffff', // Ensuring all text uses white color
            },
        },
    });

    return (
        <ThemeProvider theme={blackTheme}>
            <Nav />
            <Titels Name={"Join us"} url={"https://wordpress.themeholy.com/fitkit/wp-content/themes/fitkit/assets/img/breadcumb-thumb.png"} />
            <Box sx={{ padding: 2, bgcolor: 'background.default' }}>
                <Container fixed>
                    <Grid container spacing={2} justifyContent="center">
                        {plans.map((plan, index) => (
                            <Grid
                                item
                                xs={12}
                                md={6}
                                lg={3}
                                key={index}
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-delay="100"
                            >
                                <Card className="scal" sx={{ p: 2, boxShadow: 3, transition: "0.3s", bgcolor: 'background.paper', ':hover': { scale: "1.03" },display:"flex",justifyContent:"space-between" ,flexDirection:"column",height:"700px"}}>
                                    <Box>
                                        <Typography variant="h6" align="center" color={"#F67A45"} fontWeight="bold">
                                            {plan.name}
                                        </Typography>
                                        <Typography variant="h2" align="center" fontWeight="bold" mt={2}>
                                            <sup>$</sup>
                                            {plan.price}
                                            <Typography component="span" variant="h5" color="text.secondary">
                                                {" / mo"}
                                            </Typography>
                                        </Typography>
                                        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 2 }}>
                                            <img src={plan.imgSrc} alt={plan.name} style={{ width: "75%" }} />
                                        </Box>
                                        <Box>
                                            {plan.features.map((feature, idx) => (
                                                <Typography key={idx} align="center" mt={2}>
                                                    {feature}
                                                </Typography>
                                            ))}
                                            {plan.unavailableFeatures.map((feature, idx) => (
                                                <Typography key={idx} align="center" mt={2} color="text.disabled" sx={{ textDecoration: "line-through" }}>
                                                    {feature}
                                                </Typography>
                                            ))}
                                        </Box>

                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                                        <Button variant="outlined" color="" className="button" sx={{ padding: "10px 40px", width: "auto" }}>
                                            Buy Now
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Footer />
        </ThemeProvider>
    );
}

export default Join;
