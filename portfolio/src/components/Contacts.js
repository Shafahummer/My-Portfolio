
import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail, AiFillGithub } from 'react-icons/ai'
import { ImLinkedin } from 'react-icons/im'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import MyNavComponent from './ReusableComponents/MyNavComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "#242B2E",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        minHeight: window.innerHeight
    },
    input: {
        color: "#FFFFFF",
    },
    inputMail: {
        color: "#FFFFFF",
        minHeight: 100
    },
    inputBorder: {
        flex: 1,
        display: 'flex',
        marginBottom: 30,
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "& .MuiOutlinedInput-input": {
            color: "white"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "white"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "white"
        },
        "& .MuiInputLabel-outlined": {
            color: "white"
        },
        "&:hover .MuiInputLabel-outlined": {
            color: "white"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "white"
        }
    },
    snackbar: {
        backgroundColor: "#3498DB"
    }
}));



function Contacts() {

    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const classes = useStyles();
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


    //is large screen or mobile screen 
    const matches = useMediaQuery('(min-width:600px)');

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
                    message="All fields are mandatory..."
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

                <div style={{ color: "#3498DB", fontSize: 28, textDecoration: "underline", fontWeight: "bold", marginTop: !matches ? 55 : 0 }}>Contact Me</div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <FiPhone color="#FFFFFF" size={25} />
                    <h3 style={{ marginLeft: 10, color: "#FFFFFF" }}>+91 9656567353</h3>
                </div>
                <a href='mailto:shafahummer11@gmail.com' target='_blank' style={{ textDecoration: "none" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <AiOutlineMail color="#FFFFFF" size={25} />
                        <h3 style={{ marginLeft: 10, color: "#FFFFFF" }}>shafahummer11@gmal.com</h3>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/shafah-ummer-8309ba17b' target='_blank' style={{ textDecoration: "none" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <ImLinkedin color="#FFFFFF" size={25} />
                        <h3 style={{ marginLeft: 10, color: "#FFFFFF" }}>https://www.linkedin.com/in/shafah-ummer-8309ba17b</h3>
                    </div>
                </a>
                <a href='https://github.com/Shafahummer' target='_blank' style={{ textDecoration: "none" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <AiFillGithub color="#FFFFFF" size={25} />
                        <h3 style={{ marginLeft: 10, color: "#FFFFFF" }}>https://github.com/Shafahummer</h3>
                    </div>
                </a>

                <div style={{ marginTop: 50 }}>
                    <h3 style={{ color: "#FFFFFF", fontWeight: "bold" }}>Send Mail</h3>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <TextField onChange={(text) => { setEmail(text.target.value) }} style={{ marginRight: 20 }} className={classes.inputBorder} inputProps={{ className: classes.input }} id="outlined-basic" label="Email" variant="outlined" />
                        <TextField onChange={(text) => { setSubject(text.target.value) }} className={classes.inputBorder} inputProps={{ className: classes.input }} id="outlined-basic" label="Subject" variant="outlined" />
                    </div>
                    <TextField multiline onChange={(text) => { setMessage(text.target.value) }} className={classes.inputBorder} inputProps={{ className: classes.inputMail }} id="outlined-basic" label="Message" variant="outlined" />
                </div>
                <Button variant="contained" color="secondary" onClick={() => {
                    if (email.trim() === "" || subject.trim === "" || message.trim() === "") {
                        handleClick()
                    } else {
                        window.open(`mailto:${email}?subject=${subject}&body=${message}`, '_blank')
                    }
                }}>
                    Send Mail
                </Button>
                <div style={{ height: 30 }} />
            </main>
        </div>
    );
}

export default Contacts;