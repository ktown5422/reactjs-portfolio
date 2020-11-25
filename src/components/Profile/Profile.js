import { Typography } from '@material-ui/core'
import React from 'react'
import kevinMe from '../../assets/images/kevinMe.jpg'
import CustomTimeline from "../Timeline/Timeline"

import resumeData from '../../utils/resumeData'
import './Profile.css'

function Profile() {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>

            <figure className="profile_image">
                <img src={kevinMe} alt="me" />
            </figure>

            <div className="profile_information">
                <CustomTimeline />
                <br/>
                <button>my button</button>
            </div>
            
        </div>
    )
}

export default Profile
