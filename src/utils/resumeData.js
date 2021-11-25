import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import { WebOutlined } from '@material-ui/icons';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CodeIcon from '@material-ui/icons/Code';
import Image1 from '../assets/images/cyberbar.png';
import Image2 from '../assets/images/picbk.jpg';



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'Kevin Townson',
    title: 'Associate Software Engineer',

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

    about: "LaunchCode and Savvy Coder Graduate Looking to expand skills in Software Development as a Junior Software Engineer. I am passionate about technology and working with creative problem solvers to build efficient and engaging web or mobile applications.",

    experience: [
      {
        title: "World Wide Technology - Associate Software Engineer",
        date: "September 2021 - Present",
        description: "We Offer iPhone Screen Replacement and Web Development Services"
      },
      {
        title: "World Wide Technology - Software Engineer Apprentice",
        date: "May 2021 - September 2021",
        description: "I specialize in building beautiful, responsive websites for small businesses. I provide useful and meaningful service to customers with their projects. I have the knowledge to complete the assigned task so that the job will be done. Self-managed and resourceful, able to manage a web development project from start to finish.",
      },
      {
        title: "Ramp Agent - Southwest Airlines",
        date: "April 2018 - May 2021",
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
    ],

    services: [
       {
         title: "Web Development",
         description: "We Specialize In building beautiful, responsive websites For small businesses.",
         icon: <WebOutlined />,
       },
       {
        title: "Mobile App Development",
        description: "We repair cell phone screens, charging ports, batteries, headphone jacks, broken cameras and many other types of repairs",
        icon: <PhoneAndroidIcon />,
      },
      {
        title: "Test Driven Development",
        description: "We deliver your product as fast as possible",
        icon: <CodeIcon />,
      },
    ],

    skills: [
      {
        title: "Front-End",
        description: [
          "React JS",
          "React Native",
          "Vanilla Javascript",
          "Boostrap",
          "Material UI",
          "Redux",
          "Jest-Testing-Framework/Enzyme/Test Renderer"
        ],
      },
      {
        title: "Back-End",
        description: ["NodeJS", "Express"],
      },
      {
        title: "Databases",
        description: ["MySQL", "PostgreSQL", "MongoDB"],
      },
      {
        title: "Source Control",
        description: ["Git", "Source Tree"],
      },
    ],

    portfolio: [
      {
        id: 1,
        tag: 'React Native',
        image: Image1,
        title: "Cyber Bar Mobile App",
        caption: "Booking App",
        description: "React Native App developed with Expo, used to book appointments and store inventory",
        links: [
          { links: "https://github.com/ktown5422/cell-phone-repair-react-native-app", icon: <LanguageIcon /> }
        ], 
      },

      // {
      //   id: 2,
      //   tag: 'Python',
      //   image: Image2,
      //   title: "Python Project 1",
      //   caption: "a short description",
      //   description: "This is my project description. Please fill it in.",
      //   links: [
      //     { links: "https://github.com/ktown5422", icon: <GitHubIcon /> }
      //   ], 
      // },

      { 
        id: 3,
        tag: 'NodeJS',
        image: Image1,
        title: "Cyber Bar Mobile App API",
        caption: "Rest API and Database",
        description: "Rest API developed with NodeJS/Express framework and MongoDB database",
        links: [
          { links: "https://github.com/ktown5422/cyberbar-restapi-database", icon: <GitHubIcon /> }
        ], 
      },
    ]
  };