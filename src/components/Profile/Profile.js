import { Typography } from "@material-ui/core";
import React from "react";
import kevinMe from "../../assets/images/kevinMe.jpg";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import PersonIcon from "@material-ui/icons/Person";

import resumeData from "../../utils/resumeData";
import "./Profile.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
{/* Below The ES6 conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.*/}
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

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
        <CustomTimeline icon={<PersonIcon />}>
            <CustomTimelineItem title='Name' text={resumeData.name} />
            <CustomTimelineItem title='Title' text={resumeData.title} />
            <CustomTimelineItem title='Email' text={resumeData.email} />
         {Object.keys(resumeData.socials).map((key) => (
             <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
         ))}
        </CustomTimeline>
        
        <div className="button_container">
          <CustomButton text={'Download CV'} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
