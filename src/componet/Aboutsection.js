import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

function Aboutsection() {
    return (
        <Container fixed>
            <Grid container sx={{ marginTop: "70px" }}>
                {/* Image Section */}
                <Grid item xs={12} sm={6}>
                    <Box 
                        component="img" 
                        src="https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/about_3_1.png" 
                        alt="Fitness" 
                        sx={{ width: { xs: "100%", sm: "100%", md: "400px" } }} 
                    />
                </Grid>

                {/* Text Section */}
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: "center" }}>
                        <Box sx={{ backgroundColor: '#F67A45', width: "80px", height: "3px" }}></Box>
                        <Typography 
                            sx={{ 
                                paddingLeft: '14px', 
                                color: "#F67A45", 
                                fontFamily: "sans-serif", 
                                fontSize: { xs: '16px', sm: '18px' }, // Responsive font size
                                fontWeight: 'bold' 
                            }}
                        >
                            ABOUT US
                        </Typography>
                    </Box>
                    
                    <Typography
                        sx={{
                            fontFamily: 'Teko, sans-serif',
                            lineHeight: '1.227',
                            fontSize: { xs: '36px', sm: '48px', md: '56px' }, // Responsive heading font size
                            fontWeight: 'bold',
                            marginTop: '20px',
                        }}
                    >
                        Invigorating Fitness Workout For Body And Mind
                    </Typography>
                    
                    <Typography sx={{ color: '#898989', fontSize: { xs: '14px', sm: '16px' }, marginTop: '20px' }}>
                        Body fitness encompasses various aspects of physical health and well-being, involving a combination of exercise, nutrition, and lifestyle choices. Achieving and maintaining optimal body fitness contributes to overall health, vitality. Joining fitness classes, sports teams, or workout groups provides social support.
                    </Typography>
                    
                    {/* Feature Points */}
                    <Grid container sx={{ gap: "20px" }}>
                        <Grid 
                            item 
                            sx={{ 
                                display: "flex", 
                                alignItems: "center", 
                                textAlign: "center", 
                                border: "1px solid #cfcfcf", 
                                padding: "10px", 
                                gap: "18px", 
                                borderRadius: "20px", 
                                marginTop: "30px" 
                            }}
                        >
                            <Box sx={{
                                borderRadius: "10px",
                                width: "45px",
                                height: "45px",
                                backgroundColor: "#F67A45",
                                textAlign: "center",
                                lineHeight: "45px",
                                fontSize: "20px",
                                fontWeight: "700",
                                flex: "none",
                                color: "white"
                            }}>01</Box>
                            <Box sx={{ 
                                fontSize: { xs: '20px', sm: '24px' }, // Responsive font size for feature points
                                fontWeight: "700" 
                            }}>
                                Fitness Training
                            </Box>
                        </Grid>

                        <Grid 
                            item 
                            sx={{ 
                                display: "flex", 
                                alignItems: "center", 
                                textAlign: "center", 
                                border: "1px solid #cfcfcf", 
                                padding: "10px", 
                                gap: "18px", 
                                borderRadius: "20px", 
                                marginTop: "30px" 
                            }}
                        >
                            <Box sx={{
                                borderRadius: "10px",
                                width: "45px",
                                height: "45px",
                                backgroundColor: "#F67A45",
                                textAlign: "center",
                                lineHeight: "45px",
                                fontSize: "20px",
                                fontWeight: "700",
                                flex: "none",
                                color: "white"
                            }}>02</Box>
                            <Box sx={{ 
                                fontSize: { xs: '20px', sm: '24px' }, // Responsive font size for feature points
                                fontWeight: "700" 
                            }}>
                                Regular Routine
                            </Box>
                        </Grid>
                    </Grid>

                    <Typography sx={{ color: '#898989', fontSize: { xs: '14px', sm: '16px' }, marginTop: '5px' }}>
                        Gradually increasing the intensity, duration, or complexity of exercises ensures ongoing improvements in strength, endurance, and overall fitness.
                    </Typography>

                    <Button 
                        sx={{ 
                            color: "white", 
                            padding: "10px 30px", 
                            backgroundColor: "#F67A45", 
                            marginBottom: '80px', 
                            marginTop: "10px", 
                            borderRadius: "15px",
                            fontSize: { xs: '14px', sm: '16px' } // Responsive font size for button
                        }}
                    >
                        View All Classes
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Aboutsection;
