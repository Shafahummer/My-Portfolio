
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MyNavComponent from './ReusableComponents/MyNavComponent';

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

}));

function AboutMe() {
    const classes = useStyles();

    //is large screen or mobile screen 
    const matches = useMediaQuery('(min-width:600px)');
    const matches2 = useMediaQuery('(min-width:900px)');


    return (
        <div className={classes.root}>
            <MyNavComponent />
            <main className={classes.content}>
                <div style={{ color: "#3498DB", fontSize: 28, textDecoration: "underline", fontWeight: "bold", marginTop: !matches ? 55 : 0 }}>About Me</div>

                <div style={{ flexDirection: matches2 ? "row" : "column", display: "flex" }}>
                    <div style={{ fontSize: 20, fontWeight: "bold", flex: 4, marginRight: 40, color: "#FFFFFF" }}>
                        I am passionate software developer with 1+ years of experience as a React Native Developer.
                        <p>
                            I have worked on various project. Apart from React Native I also have great skill in technologies like Flutter, React, and backend technolgies like Node js, express and mongodb along with relational databases like mySQL, postgreSQL.
                        </p>
                    </div>

                    <div style={{ flex: 2 }}>
                        <div style={{ fontSize: 24, fontWeight: "bold", color: "#FFFFFF", textDecoration: "underline" }}>Personal Information</div>
                        <div style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>Name : Shafah Ummer</div>
                        <div style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>DOB : 10/08/1997</div>
                        <div style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>Place : Malappuram</div>
                        <div style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>Email : shafahummer11@gmail.com</div>
                        <div style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>Phone : 9656567353</div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default AboutMe;