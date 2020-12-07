import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'Kevin Townson',
    title: 'Full Stack Developer',

    email: 'ktown5422@gmail.com',
    phone: '314-498-1411',
    address: '4818 Washington Blvd, St. Louis MO',

    socials: {
      Linkedin: {
        link: 'https://linkedin.com/in/kevin-townson',
        text: "MyLinkedIn",
        icon: <LinkedInIcon />,
      },
      Github: {
        link: 'https://github.com/ktown5422',
        text: 'MyGithub',
        icon: <GitHubIcon />,
      },
    },

    about: "LaunchCode and Savvy Coder Graduate Looking to expand skills in Software Development as a Junior Software Engineer. I am passionate about technology and working with creative problem solvers to build efficient and engaging web solutions.",

    experience: [
      {
        title: "Web Developer/Techniction - Cyber Bar",
        date: "July 2020 - Present",
        description: "We Offer iPhone Screen Replacement and Web Development Services"
      },
      {
        title: "Freelance Web Developer - Upwork.com",
        date: "December 2019 - Present",
        description: "I specialize in building beautiful, responsive websites for small businesses. I provide useful and meaningful service to customers with their projects. I have the knowledge to complete the assigned task so that the job will be done. Self-managed and resourceful, able to manage a web development project from start to finish.",
      },
      {
        title: "Ramp Agent - Southwest Airlines",
        date: "April 2018 - Present",
        description: "Handle all aspects of loading, stowing and unloading baggage, cargo airmail, air freight, ballast and company materials according to a predetermined plan received either electronically or manually from an Operations Agent.",
      },
    ],

    education: [
      {
        title: "LaunchCode",
        date: "April 2019 - December 2019",
        description: "LC101 is a 20-week course designed to prepare participants to become web developers. The course is taught in several programming languages, including Python, Java, and Javascript. All students will complete the same core curriculum in Python and then learn a specialized language track designed to hone key skills that are in high demand.",
      },
      {
        title: "Savvy Coders",
        date: "January 2019 - April 2019",
        description: "An accelerated 11-week coding course that includes the fundamentals of HTML5, CSS3, functional and object-oriented JavaScript. Training also covered advanced single web page implementation, interactions through the DOM, Web API’s, JSON and Node.js. Leadership and organizational skills were also refined with Agile fundamentals certification and training.",
      },
      {
        title: "Codecademy",
        date: "May 2015 - Present",
        description: "Completed Online Courses to further my learning in HTML/CSS and Javascript https://www.codecademy.com/profiles/ktown5422 ",
      },
    ]
  };