import React, { useState } from 'react'
import { Box } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function Gotop() {
    const [show, setshow] = useState((window.scrollY + window.innerHeight - 10 > window.innerHeight));
    window.addEventListener("scroll", () => {
        if (window.scrollY + window.innerHeight - 10 > window.innerHeight) {
            setshow(true);
        } else {
            setshow(false);
        }
    });



    return (
        <>
            <Box onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
            }} sx={{
                zIndex: "9999",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                color: "white",
                backgroundColor: "#F67A45",
                display: "flex",
                opacity: show ? "1" : "0",
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                bottom: "50px",
                right: "50px",
                transition:"0.5s",
                '&:hover': {
                    backgroundColor: "#e95e22"
                }
            }} >
                <KeyboardArrowUpIcon />
            </Box>
        </>
    )
}

export default Gotop