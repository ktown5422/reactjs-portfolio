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

    about: "LaunchCode and Savvy Coder Graduate Looking to expand skills in Software Development as a Junior Software Engineer. I'm passionate about technology and working with creative problem solvers to build efficient and engaging web solutions."
};