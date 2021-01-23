
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MyDrawerComponent from './MyDrawerComponent';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
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
    drawerPaper1: {
        width: drawerWidth,
    },
    drawerPaper2: {
        width: drawerWidth,
        marginTop: -65
    }
}));


const MyNavComponent = () => {

    const classes = useStyles();
    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const matches = useMediaQuery('(min-width:600px)');


    return (
        <>
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
                        <MyDrawerComponent />
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
                        <MyDrawerComponent />
                    </Drawer>
                </Hidden>
            </nav>
        </>
    )
}
export default MyNavComponent;