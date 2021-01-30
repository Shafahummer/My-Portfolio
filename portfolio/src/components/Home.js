
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typewriter from 'typewriter-effect';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import '../App.css';
import MyNavComponent from './ReusableComponents/MyNavComponent';
import myBgImg from '../images/bg-img.jpeg';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';


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
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: "none",
        borderRadius: 5,
        padding: 60,
        width: 400
    },
    paperSmall: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: "none",
        borderRadius: 5,
        padding: 60,
        width: "90%"
    },
    inputBorder: {
        flex: 1,
        display: 'flex',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000000"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000000"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000000"
        },
        "& .MuiOutlinedInput-input": {
            color: "#000000"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "#000000"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#000000"
        },
        "& .MuiInputLabel-outlined": {
            color: "#000000"
        },
        "&:hover .MuiInputLabel-outlined": {
            color: "#000000"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#000000"
        }
    },
    input: {
        color: "#000000"
    },
    btnContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    }
}));


function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}



function Home() {

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const history = useHistory()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const loginBtnPressed = () => {
        if (userName.trim() === "" || userName.trim().length < 3) {

        }
        history.push('/admin')
    }

    return (
        <div className={classes.root}>
            <MyNavComponent />
            <main className={classes.content}>
                <Button onClick={handleOpen} style={{ position: "absolute", top: !matches ? 10 : 20, right: !matches ? 10 : 20, marginTop: !matches ? 65 : 0 }} variant="contained">
                    Admin
                </Button>
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
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={modalStyle} className={!matches ? classes.paperSmall : classes.paper}>
                        <TextField onChange={(text) => { setUserName(text.target.value) }} className={classes.inputBorder} inputProps={{ className: classes.input }} id="outlined-basic" label="Username" variant="outlined" />
                        <TextField type="password" onChange={(text) => { setPassword(text.target.value) }} className={classes.inputBorder} inputProps={{ className: classes.input }} style={{ marginTop: 30 }} id="outlined-basic" label="Password" variant="outlined" />

                        <div className={classes.btnContainer}>
                            <Button variant="contained" color="primary" onClick={() => loginBtnPressed()}>
                                Log in
                            </Button>
                        </div>
                    </div>
                </Modal>
            </main>
        </div>
    );
}

export default Home;