import { Box, Button, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";

function Section3() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [img, setimg] = useState();
  const data = [
    {
      img: "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_card_1_1.png",
      svg: "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_icon1-1.svg",
      titel: "Fitness & Gym Class",
      para: "Treadmills, stationary bikes, and elliptical machines are commonly used for cardiovascular workouts, helping to improve endurance, burn calories, and enhance heart health.",
      profileimg:
        "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_card_author_1_1.png",
      subtitel: "Henry Joshep",
      subbootem: "GYM Trainer",
    },
    {
      img: "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_card_1_2.png",
      svg: "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_icon1-2.svg",
      titel: "Personal Training",
      para: "Treadmills, stationary bikes, and elliptical machines are commonly used for cardiovascular workouts, helping to improve endurance, burn calories, and enhance heart health.",
      profileimg:
        "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_card_author_1_2.jpg",
      subtitel: "Henry Joshep",
      subbootem: "GYM Trainer",
    },
    {
      img: "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_card_1_3.png",
      svg: "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_icon1-3.svg",
      titel: "Boxing Class",
      para: "Treadmills, stationary bikes, and elliptical machines are commonly used for cardiovascular workouts, helping to improve endurance, burn calories, and enhance heart health.",
      profileimg:
        "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_card_author_1_3.jpg",
      subtitel: "Esa Elizabed",
      subbootem: "GYM Trainer",
    },
    {
      img: "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_card_1_4.png",
      svg: "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_icon1-4.svg",
      titel: "CrossFit Training",
      para: "Treadmills, stationary bikes, and elliptical machines are commonly used for cardiovascular workouts, helping to improve endurance, burn calories, and enhance heart health.",
      profileimg:
        "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_card_author_1_1.png",
      subtitel: "Henry Joshep",
      subbootem: "GYM Trainer",
    },
    {
      img: "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_card_1_5.png",
      svg: "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_icon1-5.svg",
      titel: "Yoga & Pilates",
      para: "Treadmills, stationary bikes, and elliptical machines are commonly used for cardiovascular workouts, helping to improve endurance, burn calories, and enhance heart health.",
      profileimg:
        "https://wordpress.themeholy.com/fitkit/wp-content/uploads/2024/08/service_card_author_1_3.jpg",
      subtitel: "Esa Elizabed",
      subbootem: "GYM Trainer",
    },
  ];

  const [show, setshow] = useState(data[0]);
  return (
    <>
      <Box sx={{ backgroundColor: "#141414" }}>
        <Box
          sx={{
            paddingTop: "50px",
            paddingBottom: "50px",
            backgroundColor: "#000000",
          }}
        >
          <Container>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  backgroundColor: "#F67A45",
                  width: "80px",
                  height: "3px",
                }}
              ></Box>
              <Typography
                sx={{
                  paddingLeft: "14px",
                  color: "#F67A45",
                  fontFamily: "sans-serif",
                  fontSize: isMobile ? "16px" : "20px",
                  fontWeight: "bold",
                }}
              >
                Gym & Fitness Training
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: "10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: isMobile ? "30px" : "40px",
                  fontWeight: "bold",
                  fontStyle: '"Teko", sans-serif',
                  color: "white",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Our Gym Fitness Classes
              </Typography>
              <Button
                sx={{
                  color: "white",
                  padding: "10px 30px",
                  backgroundColor: "#F67A45",
                  marginTop: isMobile ? "20px" : "30px",
                }}
              >
                view all class
              </Button>
            </Box>
            <Grid container spacing={5} sx={{ marginTop: "30px" }}>
              <Grid xs={12} md={3} sx={{ display: "flex", alignItems: "center" }} item>
                <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
                  {data.map((item, index) => (
                    <Button
                      key={index}
                      sx={{
                        color: "white",
                        padding: isMobile ? "8px 15px" : "20px 30px",
                        backgroundColor: "#F67A45",
                        marginTop: "10px",
                        fontSize: isMobile ? "10px" : "inherit",
                        width: "100%",
                      }}
                      onClick={() => setshow(item)}
                    >
                      {item.titel}
                    </Button>
                  ))}
                </Box>
              </Grid>
              <Grid
                xs={12}
                md={9}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                item
              >
                <Box
                  sx={{
                    width: isMobile ? "100%" : "844px",
                    backgroundColor: "#2c2e30",
                    backgroundImage: `url(${img})`,
                  }}
                >
                  <Grid container sx={{ position: "relative" }}>
                    <Grid item xs={12} md={6}>
                      <Box
                        sx={{
                          width: isMobile ? "100%" : "350px",
                          height: isMobile ? "200px" : "400px",
                          padding: isMobile ?"0px":"20px",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundImage: `url(${show.img})`,
                            backgroundSize: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                        ></Box>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={{
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundImage:
                            "url(https://wordpress.themeholy.com/fitkit/wp-content/plugins/fitkit-core/assets/img/service-card-bg-shape1-1.png)",
                          width: isMobile ? "100%" : "300px",
                          height: isMobile ? "200px" : "305px",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          position: "absolute",
                          top: "0",
                          right: "0",
                          zIndex: "2",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component={"img"}
                          sx={{ width: "40%", opacity: "0.2" }}
                          src={`${show.svg}`}
                        ></Box>
                      </Box>
                      <Box
                        sx={{
                          position: "relative",
                          top: "0",
                          width: "100%",
                          height: "100%",
                          zIndex: "3",
                        //   padding: isMobile ? "20px" : "0",
                        }}
                      >
                        <Box
                          sx={{
                            width: "60px",
                            height: "60px",
                            backgroundColor: "#F67A45",
                            boxShadow: "-5px -5px 0px grey",
                            marginTop: "20PX ",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img src={show.svg} alt="" />
                        </Box>

                        <Typography
                          sx={{
                            color: "white",
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            fontSize: isMobile ? "20px" : "25px",
                            marginTop: "20px",
                          }}
                        >
                          {show.titel}
                        </Typography>

                        <Typography
                          sx={{
                            color: "white",
                            fontFamily: "sans-serif",
                            fontSize: isMobile ? "16px" : "19px",
                            marginTop: "10px",
                          }}
                        >
                          {show.para}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            width: "90%",
                            margin: "auto",
                            marginTop: "35px",
                            borderTop: "1px solid #767676",
                            borderBottom: "1px solid #767676",
                          }}
                        >
                          <Box
                            sx={{
                              width: isMobile ? "100%" : "50%",
                              display: "flex",
                              alignItems: "center",
                              borderBottom: isMobile ? "1px solid #767676" : "none",
                              paddingBottom: isMobile ? "10px" : "0",
                            }}
                          >
                            <Box
                              sx={{ margin: "5px" }}
                              component={"img"}
                              src={show.profileimg}
                            ></Box>
                            <Box
                              sx={{
                                marginLeft: "10px",
                                borderRight: isMobile ? "none" : "1px solid #767676",
                                paddingRight: "3px",
                              }}
                            >
                              <Box sx={{ fontSize: "20px", color: "white" }}>
                                {show.subtitel}
                              </Box>
                              <Box
                                sx={{
                                  fontSize: "13px",
                                  color: "gray",
                                  marginTop: "3px",
                                }}
                              >
                                {show.subbootem}
                              </Box>
                            </Box>
                          </Box>
                          <Box sx={{ width: isMobile ? "100%" : "50%", paddingLeft: "5px", paddingTop: isMobile ? "10px" : "0" }}>
                            <Box
                              sx={{
                                fontSize: "13px",
                                color: "gray",
                                marginTop: "3px",
                              }}
                            >
                              call my
                            </Box>
                            <Box sx={{ fontSize: "20px", color: "white" }}>
                              + 163-6589-6547
                            </Box>
                          </Box>
                        </Box>
                        <Button
                          sx={{
                            padding: "15px 25px",
                            color: "white",
                            backgroundColor: "#F67A45",
                            marginTop: "30px",
                            marginLeft: "1px",
                          }}
                        >
                          read more
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
 export default Section3