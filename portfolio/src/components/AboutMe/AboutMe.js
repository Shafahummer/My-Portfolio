import React from 'react';
import { useHistory } from 'react-router-dom'

const AboutMe = () => {
    const history = useHistory()
    return (
        <div>
            {/* <div onClick={() => history.push('/')}>
                click
            </div> */}
            <h1>About Me</h1>
        </div>
    )
}
export default AboutMe;