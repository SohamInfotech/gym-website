import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';

function Tr() {
    const [url, setUrl] = useState("https://img.freepik.com/free-photo/woman-helping-man-gym_23-2149627073.jpg?t=st=1727159034~exp=1727162634~hmac=c0f7edb4094366cd61561b5ee2ab4aee342a5fe1423f1a3d1609a024e4fb5140&w=2000");

    const handleMouseEnter = (newUrl) => {
        setUrl(newUrl);
    };

    const handleMouseLeave = () => {
        // Reset to the default image when the mouse leaves
        setUrl("https://img.freepik.com/free-photo/woman-helping-man-gym_23-2149627073.jpg?t=st=1727159034~exp=1727162634~hmac=c0f7edb4094366cd61561b5ee2ab4aee342a5fe1423f1a3d1609a024e4fb5140&w=2000");
    };



    const data = [
        {
            url: "https://img.freepik.com/free-photo/woman-helping-man-gym_23-2149627073.jpg?t=st=1727159034~exp=1727162634~hmac=c0f7edb4094366cd61561b5ee2ab4aee342a5fe1423f1a3d1609a024e4fb5140&w=2000",
            name: "img1"
        },
        {
            url: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?cs=srgb&dl=pexels-willpicturethis-1954524.jpg&fm=jpg",
            name: "img2"
        }, {
            url: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?cs=srgb&dl=pexels-willpicturethis-1954524.jpg&fm=jpg",
            name: "img3"
        }
    ]

    return (
        <>
            <Grid>
                <Grid>

                </Grid>
                <Grid>

                </Grid>
            </Grid>
            <Box sx={{ height: "600px", backgroundImage: `url(${url})`, backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ color: "white" }}>
                    {
                        data.map((item) => (
                            <Box
                                component={"div"}
                                id='img1'
                                className='hov'
                                sx={{ fontSize: "70px", fontWeight: "600", marginTop: "50px ", textShadow: '1px 0 #F67A45,-1px 0 #F67A45,0 1px #F67A45,0 -1px #F67A45,1px 1px #F67A45,-1px -1px #F67A45,1px -1px #F67A45,-1px 1px #F67A45', color: "black" }}
                                onMouseEnter={() => handleMouseEnter(`${item.url}`)} // Change this to the actual image URL for img1
                                onMouseLeave={handleMouseLeave}
                            >
                                {item.name}
                            </Box>
                        ))
                    }

                </Box>
            </Box>
        </>
    );
}

export default Tr;
