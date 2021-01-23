
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
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'

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
        // overflow: "hidden",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: window.innerHeight,
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "#242B2E"
    },
    topbarContainer: {
        justifyContent: "space-between",
        display: "flex"
    },
    listTxt: {
        marginLeft: -15
    },

    root1: {
        // maxWidth: "30%",
        margin: 10
    },
    media1: {
        height: 180,
    },
}));



function Projects(props) {
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
            <ListItem button onClick={() => history.push('/contacts')}>
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