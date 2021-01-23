
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { useHistory } from 'react-router-dom';
import myImg from '../../images/me.jpeg';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    listTxt: {
        marginLeft: -15
    },
}));


const MyDrawerComponent = () => {
    const classes = useStyles();
    const history = useHistory()

    return (
        <div>
            <div className={classes.toolbar} />
            <img style={{ width: "100%", height: 200, objectFit: "stretch" }} alt="profile" src={myImg} />
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
            <a target="_blank" download style={{ textDecoration: "none" }} href="http://www.africau.edu/images/default/sample.pdf" >
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
    )
}
export default MyDrawerComponent;