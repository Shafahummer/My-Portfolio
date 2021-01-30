import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
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
}));

const saveAbout = () => {

}

const AdminScreen = () => {
    const [about, setAbout] = useState("")
    const classes = useStyles();

    return (
        <div style={{ padding: 10 }}>
            <div style={{ fontWeight: "bold", textAlign: "center", marginBottom: 20, textDecoration: "underline" }}>Admin Panel</div>

            <div style={{ marginBottom: 30, padding: 30, backgroundColor: "#50DBB4", borderRadius: 10 }}>
                <div style={{ marginBottom: 15, textDecoration: "underline" }}>Add Project</div>
                <TextField style={{ marginBottom: 20 }} onChange={(text) => { setAbout(text.target.value) }} className={classes.inputBorder} inputProps={{ className: classes.inputMail }} id="outlined-basic" label="Project Title" variant="outlined" />
                <TextField multiline style={{ marginBottom: 20 }} onChange={(text) => { setAbout(text.target.value) }} className={classes.inputBorder} inputProps={{ className: classes.inputMail }} id="outlined-basic" label="Project Description" variant="outlined" />
                <div>Select Image</div>
                <input style={{ marginBottom: 20 }} type="file" onChange={(ev) => {
                    console.log(ev.target.files[0]);
                }} />
                <div>Select Video</div>
                <input style={{ marginBottom: 20 }} type="file" />
                <div>
                    <Button variant="contained" color="primary">
                        Save project
                    </Button>
                </div>
            </div>

            <div style={{ marginBottom: 30, borderRadius: 10, padding: 30, backgroundColor: "#51E1ED" }}>
                <div style={{ marginBottom: 15, textDecoration: "underline" }}>Upload Resume</div>
                <div>Select Resume</div>
                <input style={{ marginBottom: 20 }} type="file" />
                <div>
                    <Button variant="contained" color="primary">
                        Update resume
                    </Button>
                </div>
            </div>

            <div style={{ marginBottom: 30, borderRadius: 10, padding: 30, backgroundColor: "#E5D68A" }}>
                <div style={{ marginBottom: 15, textDecoration: "underline" }}>Add About Details</div>
                <TextField multiline style={{ marginBottom: 20 }} onChange={(text) => { setAbout(text.target.value) }} className={classes.inputBorder} inputProps={{ className: classes.inputMail }} id="outlined-basic" label="About Me" variant="outlined" />
                <Button variant="contained" color="primary" onClick={() => saveAbout()}>
                    Save about
                </Button>
            </div>


        </div>
    )
}
export default AdminScreen;