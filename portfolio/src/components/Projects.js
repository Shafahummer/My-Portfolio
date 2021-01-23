
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import MyNavComponent from './ReusableComponents/MyNavComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: window.innerHeight,
        display: "flex",
        flexDirection: "column",
    },
    media1: {
        height: 180,
    },
}));



function Projects() {
    const classes = useStyles();

    //is large screen or mobile screen 
    const matches = useMediaQuery('(min-width:600px)');
    const matches2 = useMediaQuery('(min-width:900px)');

    return (
        <div className={classes.root}>

            <MyNavComponent />

            <main className={classes.content}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ marginTop: !matches ? 55 : 0 }}
                >
                    <Card style={{
                        maxWidth: !matches2 ? "90%" : "30%",
                        margin: 10
                    }}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media1}
                                image="https://images.pexels.com/photos/4134787/pexels-photo-4134787.jpeg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>

                    <Card style={{
                        maxWidth: !matches2 ? "90%" : "30%",
                        margin: 10
                    }}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media1}
                                image="https://images.pexels.com/photos/4134787/pexels-photo-4134787.jpeg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>

                    <Card style={{
                        maxWidth: !matches2 ? "90%" : "30%",
                        margin: 10
                    }}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media1}
                                image="https://images.pexels.com/photos/4134787/pexels-photo-4134787.jpeg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                    <Card style={{
                        maxWidth: !matches2 ? "90%" : "30%",
                        margin: 10
                    }}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media1}
                                image="https://images.pexels.com/photos/4134787/pexels-photo-4134787.jpeg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>


                </Grid>
            </main>
        </div>
    );
}

export default Projects;