import * as React from 'react';
import { Grid, Card, CardContent, CardMedia, CardActions, Button, Typography, Container } from '@mui/material';

const ImgMediaCard = ({ title, description, image }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2, backgroundColor: "black" }}>
            <CardMedia component="img" alt={title} height="180" image={image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='white'>
                    {title}
                </Typography>
                <Typography variant="body2" color="white">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button className='buttonn' sx={{ color: "white", backgroundColor: "#F67A45" }} size="small">Share</Button>
                <Button size="small" className='button' sx={{ backgroundColor: "black", color: "white" }}>Learn More</Button>
            </CardActions>
        </Card>
    );
};

function Carddata() {
    const cards = [
        { title: 'Iron Giants', description: '“Every step counts!” Remind clients that even small efforts can lead to big changes.', image: 'https://fit-volley.ru/wp-content/uploads/zhim-ganteley-na-plechi.jpg' },
        { title: 'Body Boosters', description: '“You’re stronger than you think!” Empower them to push through their mental barriers', image: 'https://i0.wp.com/dicasdemusculacao.org/wp-content/uploads/2017/06/treino-de-pernas-betao.png' },
        { title: 'Fit Factor', description: 'Progress can be slow, but let’s review your goals and track small wins along the way.”', image: 'https://www.periodistadigital.com/wp-content/uploads/2020/09/La-Roca-Dwayne-Johnson.jpg' },
        { title: 'Fit Frenzy', description: 'Every step counts!” Remind clients that even small efforts can lead to big changes.', image: 'https://stojak.ru/wp-content/uploads/2018/09/fitness-girl.jpg' },
        { title: 'Fit Fusion', description: '“You’re stronger than you think!” Empower them to push through their mental barriers', image: 'https://i.utilitylifeadvice.com/images/001/image-2297-j.webp' },
        { title: 'Muscle Makers', description: '“Let’s set some short-term goals and find activities you enjoy! Mixing things up can keep it.”', image: 'https://wannabemagazine.com/wp-content/uploads/2011/10/tumblr_mbqabmmG7Z1qlq3goo1_1280.jpg' },

    ];

    return (
        <Container fixed>
            <Grid container spacing={2} justifyContent="center">
                {cards.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ImgMediaCard title={card.title} description={card.description} image={card.image} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Carddata;