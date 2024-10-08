import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

function Section2() {
  return (
    <Box sx={{ backgroundColor: "#FFFFFF", paddingTop: "90px", paddingBottom: "40px" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', alignItems: "center" }}>
              <Box sx={{ backgroundColor: '#F67A45', width: "80px", height: "3px" }} />
              <Typography
                sx={{
                  paddingLeft: '14px',
                  color: "#F67A45",
                  fontFamily: "sans-serif",
                  fontSize: { xs: '20px', sm: '25px', md: '30px' },
                  fontWeight: 'bold'
                }}
              >
                Why Choose Us
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: 'sans-serif',
                fontSize: { xs: '24px', sm: '30px', md: '40px' },
                fontWeight: 'bold',
                marginTop: '20px'
              }}
            >
              Invigorating Fitness Workout For Body And Mind
            </Typography>

            <Typography sx={{ color: '#898989', marginTop: '20px', fontSize: { xs: '14px', md: '16px' } }}>
              Many individuals benefit from personalized workout plans designed by fitness professionals or personal trainers to address specific fitness goals, such as muscle gain, weight loss, or improved athletic performance. Gyms provide the flexibility to choose from a variety of exercises, allowing individuals to customize their workouts.
            </Typography>

            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
              {[
                "Group Fitness and Community",
                "Benefits for Physical Health",
                "Mental Health Impact",
                "Progression and Consistency",
                "Diversity of Workouts",
                "Functional Fitness"
              ].map((text, index) => (
                <Grid item xs={12} sm={6} key={index} sx={{ display: "flex", alignItems: "center", fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                  <img src="https://wordpress.themeholy.com/fitkit/wp-content/themes/fitkit/assets/img/icon/dumbbell_icon.svg" alt="" style={{ width: '24px', height: '24px' }} />
                  <Box sx={{ marginLeft: "8px" }}>{text}</Box>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { sm: 'space-between' }, alignItems: { xs: 'center', sm: 'flex-start' }, marginTop: '30px', width: { xs: '100%', md: '60%' } }}>
              <Button className='btn' sx={{ color: "white", padding: "10px 30px", backgroundColor: "#F67A45", marginBottom: { xs: '10px', sm: '0px' }, width: { xs: '100%', sm: 'auto' } }}>
                View All Classes
              </Button>
              <Button className='btn' sx={{ color: "white", padding: "10px 30px", backgroundColor: "#F67A45", width: { xs: '100%', sm: 'auto' } }}>
                View All Classes
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={5} sx={{ position: "relative" }}>
            <img src="https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/why_1_1.png" alt="" style={{ width: "100%", marginTop: "40px", maxWidth: '100%', height: 'auto' }} />
            <Box sx={{
              width: "60%",
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: "white",
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 43px calc(100% - 76px))'
            }}>
              <Box
                component="img"
                src="https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/why_1_2.png"
                alt="Styled image"
                sx={{
                  marginLeft: "10px",
                  marginBottom: "10px",
                  zIndex: 2,
                  width: '95%',
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 42px calc(100% - 70px))',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Section2;
