import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import "./Resume.css";
import resumeData from "../../utils/resumeData";
import CustomTimeline, { CustomTimelineSeparator } from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';


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

        {/* Education and Experience */}
        <Grid container className="section">
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text ">Resume</h6>
            </Grid>

            <Grid item xs={12}>
                <Grid container>
                    {/* Experience */}
                    <Grid item sm={12} md={6}> 
                        <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                            {resumeData.experience.map((experiences) => (
                                <TimelineItem>
                                    <CustomTimelineSeparator />
                                    <TimelineContent>
                                        <Typography classname="timeline_title">{experiences.title}</Typography>
                                        <Typography variant="caption" classname="timeline_date">{experiences.date}</Typography>
                                        <Typography variant="body2" classname="timeline_description">{experiences.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>
                    </Grid>

                    {/* Education */}
                    <Grid item sm={12} md={6}></Grid>
                </Grid>
            </Grid>

        </Grid>

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
