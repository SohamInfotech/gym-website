import { Grid, Typography } from '@mui/material';
import React from 'react';
import Number from './Number';

function Section6() {
    return (
        <Grid container sx={{ paddingTop: "50px", justifyContent: "space-around", backgroundColor: "#e5e5e5", padding: "30px 0" }}>
            {[
                { number: 30, label: "Realized Projects", time: 10 },
                { number: 250, label: "Staff Members", time: 10 },
                { number: 10, label: "Offices", time: 5 },
                { number: 450, label: "Local Experts", time: 10 }
            ].map((item, index) => (
                <Grid item lg={3} xs={12} sm={6} key={index} sx={{ textAlign: "center", marginBottom: { xs: "20px", sm: "0" } }}>
                    <Typography variant='h2' sx={{ fontWeight: "500", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Number number={item.number} time={item.time} />+
                    </Typography>
                    <Typography sx={{ color: "#16BFBF", fontSize: "20px", fontWeight: "600", color: "#9f5204" }}>
                        {item.label}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    );
}

export default Section6;
