
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
        backgroundColor: "#242B2E"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        minHeight: window.innerHeight
    },
    snackbar: {
        backgroundColor: "#3498DB"
    }
}));

function AboutMe() {
    const classes = useStyles();

    //is large screen or mobile screen 
    const matches = useMediaQuery('(min-width:600px)');
    const matches2 = useMediaQuery('(min-width:900px)');
    const [errorMessage, setErrorMessage] = useState("")

    const [aboutData, setAboutData] = useState("")

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
        getAboutDetails()
    }, [])

    const getAboutDetails = () => {
        axios.get(base_url + '/api/get-about')
            .then(function (response) {
                console.log(response.data);
                if (response.data.error) {
                    setErrorMessage(response.data.error)
                    handleClick()
                } else {
                    if (response.data.about.length > 0)
                        setAboutData(response.data.about[0].about)
                    else
                        setAboutData("No data found...")
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
                <div style={{ color: "#3498DB", fontSize: 28, textDecoration: "underline", fontWeight: "bold", marginTop: !matches ? 55 : 0 }}>About Me</div>

                <div style={{ flexDirection: matches2 ? "row" : "column", display: "flex" }}>
                    <div style={{ fontSize: 20, fontWeight: "bold", flex: 4, marginRight: 40, color: "#FFFFFF" }}>
                        {/* I am passionate software developer with 1+ years of experience as a React Native Developer.
                            I have worked on various project. Apart from React Native I also have great skill in technologies like Flutter, React, and backend technolgies like Node js, express and mongodb along with relational databases like mySQL, postgreSQL.
                         */}
                        {aboutData}
                    </div>

                    <div style={{ flex: 2 }}>
                        <div style={{ fontSize: 24, fontWeight: "bold", color: "#FFFFFF", textDecoration: "underline" }}>Personal Information</div>
                        <div style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>Name : Shafah Ummer</div>
                        <div style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>DOB : 10/08/1997</div>
                        <div style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>Place : Malappuram</div>
                        <div style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>Email : shafahummer11@gmail.com</div>
                        <div style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>Phone : 9656567353</div>
                    </div>

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

                </div>
            </main>
        </div>
    );
}

export default AboutMe;