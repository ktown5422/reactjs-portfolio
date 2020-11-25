import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'Kevin Townson',
    title: 'Full Stack Javascript Developer',

    email: 'ktown5422@gmail.com',
    phone: '314-498-1411',
    address: '4818 Washington Blvd, St. Louis MO',

    social: {
      Linkedin: {
        link: 'https://www.linkedin.com/in/kevin-townson/',
        text: "MyLinkedIn",
        icon: <LinkedInIcon />,
      },
      Github: {
        link: 'https://github.com/ktown5422',
        text: 'MyGithub',
        icon: <GitHubIcon />,
      },
    },
};