
import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail, AiFillGithub } from 'react-icons/ai'
import { ImLinkedin } from 'react-icons/im'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "#242B2E",
    },
    textInput: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        backgroundColor: "white"
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: "100%",
        },
        zIndex: 1400,
    },
    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper1: {
        width: drawerWidth,
    },
    drawerPaper2: {
        width: drawerWidth,
        marginTop: -65
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        minHeight: window.innerHeight
    },
    topbarContainer: {
        justifyContent: "space-between",
        display: "flex"
    },
    listTxt: {
        marginLeft: -15
    },
    media1: {
        height: 180,
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
        marginRight: 20,
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



function Contacts(props) {

    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    // const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    // const [open, setOpen] = React.useState(false);

    const history = useHistory()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

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

    useEffect(() => {
        console.log("window--->", window);
    }, [])

    //is large screen or mobile screen 
    const matches = useMediaQuery('(min-width:600px)');
    const matches2 = useMediaQuery('(min-width:900px)');

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <img style={{ width: "100%", height: 200, objectFit: "stretch" }} alt="profile" src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg" />
            <div style={{ backgroundColor: "#3498DB", width: "100%", height: 40, alignItems: "center", justifyContent: "center", display: "flex", marginTop: -45, opacity: 0.9 }}>
                <h2 style={{ textAlign: "center", color: "#FFFFFF" }}>SHAFAH UMMER</h2>
            </div>
            <ListItem button onClick={() => history.push('/')}>
                <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
                <ListItemText className={classes.listTxt} secondary={"HOME"} />
            </ListItem>
            <ListItem button onClick={() => history.push('/about')}>
                <ListItemIcon><PersonOutlineOutlinedIcon /></ListItemIcon>
                <ListItemText className={classes.listTxt} secondary={"ABOUT ME"} />
            </ListItem>
            <a target="_blank" style={{ textDecoration: "none" }} href="http://www.africau.edu/images/default/sample.pdf" >
                <ListItem button>
                    <ListItemIcon><DescriptionOutlinedIcon /></ListItemIcon>
                    <ListItemText className={classes.listTxt} secondary={"RESUME"} />
                </ListItem>
            </a>
            <ListItem button onClick={() => history.push('/projects')}>
                <ListItemIcon><ComputerOutlinedIcon /></ListItemIcon>
                <ListItemText className={classes.listTxt} secondary={"PROJECTS"} />
            </ListItem>
            <ListItem button >
                <ListItemIcon><PhoneOutlinedIcon /></ListItemIcon>
                <ListItemText className={classes.listTxt} secondary={"CONTACT"} />
            </ListItem>


        </div>
    );

    // const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <div className={classes.root}>
            <CssBaseline />
            {!matches &&
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar style={{ justifyContent: "space-between" }}>
                        <div></div>
                        <div style={{ display: "flex", alignItems: "center", }}>
                            <h2>SHAFAH UMMER</h2>
                        </div>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            }



            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        // container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper1,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper2,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
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
                        <TextField onChange={(text) => { setEmail(text.target.value) }} className={classes.inputBorder} inputProps={{ className: classes.input }} id="outlined-basic" label="Email" variant="outlined" />
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