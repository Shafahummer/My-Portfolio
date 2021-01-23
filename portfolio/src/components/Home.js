
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typewriter from 'typewriter-effect';
import '../App.css';
import MyNavComponent from './ReusableComponents/MyNavComponent';
import myBgImg from '../images/bg-img.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        overflow: "hidden",
        backgroundImage: `url(${myBgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: window.innerHeight,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column"
    },
}));



function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MyNavComponent />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div><h1 style={{ color: "#3498DB", fontSize: 52, textAlign: "center" }}>SHAFAH UMMER</h1></div>
                <div style={{ textAlign: "center" }}>
                    <Typewriter
                        options={{
                            strings: ['I am a Full Stack Developer', 'I am a React Native Developer', 'I am a React Developer', 'I am a Flutter Developer'],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: "my-txt",
                        }}
                    />
                </div>
            </main>
        </div>
    );
}

export default Home;