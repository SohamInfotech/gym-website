import React, { useState } from "react";
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, MenuItem, Select, TextField } from "@mui/material";
import Footer from "./Footer";
import Nav from "./Nav";
import Titels from "./Titels";
// import Nav from "../Nav";
// import Footer from "../Footer";
// import Gotop from "../Gotop/Gotop";
// import Fastsection from "../Fastsection";

function Contect() {
    const [age, setAge] = React.useState('');
    const [type, settype] = React.useState('');

    const [inputValue, setInputValue] = useState('');

    return (
        <>
        <Nav/>
        <Titels Name={"Contect"} url={"https://wordpress.themeholy.com/fitkit/wp-content/themes/fitkit/assets/img/breadcumb-thumb.png"} />
          
            <Box>
                <Container fixed>
                    <Box sx={{ width: "85%", margin: "auto", marginBottom: "100px" }}>


                        <form>
                            <Box sx={{ marginTop: "30px", fontSize: "25px", color: "#F67A45" }}>
                                Information
                            </Box>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} sx={{ marginTop: "15px" }}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="First Name"
                                        type="text"
                                        sx={{ width: "100%" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{ marginTop: "15px" }}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Last Name"
                                        type="text"
                                        sx={{ width: "100%" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email Address"
                                        type="email"
                                        sx={{ width: "100%" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        required
                                        id="outlined-basic"
                                        label="Mobile"
                                        type="number"
                                        variant="outlined"
                                        value={inputValue}
                                        onInput={(e) => {
                                            let value = e.target.value;
                                            value = value.replace(/\D/g, '').slice(0, 10);
                                            setInputValue(value);
                                            if (value.length === 10) {
                                                console.log(value);
                                            }
                                        }}
                                        sx={{ width: "100%" }}
                                    />
                                </Grid>
                            </Grid>


                            <Box sx={{ marginTop: "30px", fontSize: "25px", color: "#F67A45" }}>
                                Message
                            </Box>
                            <Grid container spacing={2} sx={{ paddingLeft: "16px", marginTop: "10px" }}>
                                <TextField
                                    xs={12}
                                    sx={{ width: "100%" }}
                                    id="GYMreview"
                                    name="GYMreview"
                                    label="GYM Review"
                                    multiline
                                    rows={3}
                                    variant="outlined"
                                />
                            </Grid>

                            <Button variant="contained" sx={{ fontSize: "20px", padding: "10px 30px", lineHeight: "1", marginTop: "15px", backgroundColor: "#F67A45" }}>Submit</Button>
                        </form>
                    </Box>
                   

                </Container>
                <Footer/>
            </Box>
        </>
    )
}

export default Contect