
import React from 'react';
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
import Typewriter from 'typewriter-effect';
import './Home.css';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { useHistory } from 'react-router-dom'

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
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
        overflow: "hidden",
        backgroundImage: "url(https://images.pexels.com/photos/675251/pexels-photo-675251.jpeg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: window.innerHeight,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column"
    },
    topbarContainer: {
        justifyContent: "space-between",
        display: "flex"
    },
    listTxt: {
        marginLeft: -15
    }

}));



function Home(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const history = useHistory()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    //is large screen or mobile screen 
    const matches = useMediaQuery('(min-width:600px)');

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <img style={{ width: "100%", height: 200, objectFit: "stretch" }} alt="profile" src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg" />
            <div style={{ backgroundColor: "#3498DB", width: "100%", height: 40, alignItems: "center", justifyContent: "center", display: "flex", marginTop: -45, opacity: 0.9 }}>
                <h2 style={{ textAlign: "center", color: "#FFFFFF" }}>SHAFAH UMMER</h2>
            </div>
            <ListItem button>
                <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
                <ListItemText className={classes.listTxt} secondary={"HOME"} />
            </ListItem>
            <ListItem button onClick={() => history.push('/about')}>
                <ListItemIcon><PersonOutlineOutlinedIcon /></ListItemIcon>
                <ListItemText className={classes.listTxt} secondary={"ABOUT ME"} />
            </ListItem>
            <ListItem button>
                <ListItemIcon><DescriptionOutlinedIcon /></ListItemIcon>
                <ListItemText className={classes.listTxt} secondary={"RESUME"} />
            </ListItem>
            <ListItem button>
                <ListItemIcon><ComputerOutlinedIcon /></ListItemIcon>
                <ListItemText className={classes.listTxt} secondary={"PROJECTS"} />
            </ListItem>
            <ListItem button>
                <ListItemIcon><PhoneOutlinedIcon /></ListItemIcon>
                <ListItemText className={classes.listTxt} secondary={"CONTACT"} />
            </ListItem>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


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
                        container={container}
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
                <div className={classes.toolbar} />
                <div style={{ backgroundClip: "red" }}><h1 style={{ color: "#3498DB", fontSize: 52, textAlign: "center" }}>SHAFAH UMMER</h1></div>
                <Typewriter
                    options={{
                        strings: ['I am a Full Stack Developer', 'I am a React Native Developer', 'I am a React Developer', 'I am a Flutter Developer'],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "my-txt",
                    }}
                />



            </main>
        </div>
    );
}

export default Home;