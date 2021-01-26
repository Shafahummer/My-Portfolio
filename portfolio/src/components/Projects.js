
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import MyNavComponent from './ReusableComponents/MyNavComponent';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

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
    snackbar: {
        backgroundColor: "#3498DB"
    }
}));



function Projects() {
    const classes = useStyles();

    //is large screen or mobile screen 
    const matches = useMediaQuery('(min-width:600px)');
    const matches2 = useMediaQuery('(min-width:900px)');
    const [errorMessage, setErrorMessage] = useState("")
    const [projectsData, setProjectsData] = useState(null)

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const base_url = useSelector((state) => {
        return state.base_url;
    })

    useEffect(() => {
        getProjectsData()
    }, [])

    const getProjectsData = () => {
        axios.get(base_url + '/api/get-projects')
            .then(function (response) {
                console.log(response.data);
                if (response.data.error) {
                    setErrorMessage(response.data.error)
                    handleClick()
                } else {
                    if (response.data.project.length > 0)
                        setProjectsData(response.data.project)
                    else {
                        setErrorMessage("No projects found...")
                        handleClick()
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
                setErrorMessage(error.toString())
                handleClick()
            })
    }

    return (
        <div className={classes.root}>

            <MyNavComponent />

            <main className={classes.content}>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    ContentProps={{
                        className: classes.snackbar
                    }}
                    message={errorMessage}
                    action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={handleClose}>
                                Close
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                />

                {projectsData !== null &&
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{ marginTop: !matches ? 55 : 0 }}
                    >
                        {projectsData.map((i) => (
                            <Card style={{
                                maxWidth: !matches2 ? "90%" : "30%",
                                margin: 10
                            }}
                                onClick={() => {
                                    window.open(`${base_url}/${i.video}`, '_blank')
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media1}
                                        image={`${base_url}/${i.image}`}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {i.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {i.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                            </Card>
                        ))}

                    </Grid>
                }
            </main>
        </div>
    );
}

export default Projects;