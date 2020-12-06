import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import "./Resume.css";
import resumeData from "../../utils/resumeData";

const Resume = () => {
    return (
    <> 
        {/* About Me */} 
        <Grid container className="section pb_45">
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text ">About Me</h6>
            </Grid>
            <Grid item xs={12}>
                <Typography varient="body2" className="aboutme_text">{resumeData.about}</Typography>
            </Grid>
        </Grid>

        {/* Education and Experiences */}
        <Grid container className="section"></Grid>

        {/* Services */}
        <Grid container className="section"></Grid>

        {/* Skills */} 
        <Grid container className="section"></Grid>

        {/* Contact */}
        <Grid container className="section"></Grid>

    </> 
  );
};

export default Resume
