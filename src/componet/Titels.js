import React from 'react'

import { EffectFade, Autoplay } from "swiper/modules";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { LiaGreaterThanSolid } from "react-icons/lia";
function Titels(props) {
    return (
        <>
            <Box sx={{
                height: "400px",
                backgroundColor: "black",
                backgroundImage: `url(./img/subbgimg.jpg)`,
                backgroundSize: "cover",


            }}>


                <Container fixed sx={{ height: "100%" }}>
                    <Grid container sx={{ height: "100%" }}>
                        <Grid item xs={12} sm={6} sx={{ height: "100%", display: "flex", alignItems: "center" }}>
                            <Box>
                                <Box sx={{ width: "5px", backgroundColor: "#16BFBF", height: "100%" }}></Box>
                                <Box sx={{
                                    marginLeft: "30px", fontSize: { xs: "70px", sm: "100px" }, fontWeight: "1500", fontFamily: "teko", letterSpacing: "3px", fontWeight: "700", color: "black", lineHeight: "0.9",
                                    textShadow: '1px 0 #F67A45,-1px 0 #F67A45,0 1px #F67A45,0 -1px #F67A45,1px 1px #F67A45,-1px -1px #F67A45,1px -1px #F67A45,-1px 1px #F67A45'
                                }}>
                                    {props.Name}
                                </Box>
                                <Box sx={{ color: "white", fontFamily: "sans-serif", fontSize: "18px", marginLeft: "30px", fontWeight: "200", display: "flex", alignItems: "center" }}>
                                    home <LiaGreaterThanSolid /> <LiaGreaterThanSolid style={{ marginLeft: "-10px" }} />  {props.Name}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{
                                height: "100%",
                                width: "80%",
                                marginLeft: "20%",
                                backgroundImage: `url(${props.url})`,
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "bottom center",
                                display:{xs:"none",sm:"block"}
                            }}>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>


            </Box >
        </>
    )
}

export default Titels