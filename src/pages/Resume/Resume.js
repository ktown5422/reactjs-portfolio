import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import "./Resume.css";

const Resume = () => {
    return (
    <> 
        {/* About Me */} 
        <Grid container className="section">
            <Grid item className="section_title">
                <span></span>
                <Typography variant="h6">About Me</Typography>
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
