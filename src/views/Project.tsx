import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { Typography, IconButton } from '../components';

type Project = {
  name: string;
  overview: string;
  role: string;
  client: string;
  date: string;
  stacks: string[];
  github?: string;
  demo: string;
  examples: string[];
};

const projects: Project[] = [
  {
    name: 'Crumbs',
    overview: `This is one of my very first project I have created. It is a one page website for a bakery shop. 
    I used basic HTML/CSS with third parties libraries.`,
    role: 'frontend',
    client: 'personal',
    date: '2018',
    stacks: ['Vanilla Js', 'Gsap', 'Swiper', 'Firebase'],
    github: 'https://github.com/mcchu12/crumbs',
    demo: 'https://crumbs-3c245.web.app/',
    examples: ['/images/crumbs1.jpg'],
  },
  {
    name: 'Dogify',
    overview: `I completed a Deep Leaning Nanodegree from Udacity. 
    I wanted to using this new knowledge to create something
    that can be used in a real world application. Dogify is the result of this. 
    Using pretrained model, the application allows users to identify dog breeds with an image.`,
    role: 'frontend, backend',
    client: 'personal',
    date: '2018',
    stacks: ['Angular2', 'Keras', 'Flask'],
    github: 'https://github.com/mcchu12/Dogify',
    demo: 'https://dogifi.herokuapp.com/',
    examples: ['/images/dogify1.jpg', '/images/dogify-loop.mp4'],
  },
  {
    name: 'Leahlou',
    overview: `I had a chance to create a website for a friend. 
    She was recently gradutated in photography and wanted to move away from Wix.
    I used React for frontend and Firebase for backend. 
    Since it is a portfolio, I did not expect high traffic. 
    I chose Firebase because they offer most of the features (database, storage, and hosting) for free.  
    `,
    role: 'frontend, backend',
    client: 'Leahlou',
    date: '2019',
    stacks: ['React', 'Pose', 'Firebase'],
    demo: 'https://leahlouabellanosa.co/',
    examples: ['/images/leahlou1.jpg'],
  },
  {
    name: 'Notes',
    overview: `I created this application for Chingu Solo project pior joining their vogage. 
    Notes is Google Keep clone.`,
    role: 'frontend, backend',
    client: 'personal',
    date: '2020',
    stacks: ['React', 'Material UI', 'Express', 'Mongoose'],
    github: 'https://github.com/mcchu12/journal',
    demo: 'https://chingu-solo-journal.herokuapp.com/',
    examples: ['/images/notes1.jpg', '/images/note-loop.mp4'],
  },
];

export const Project: FC = () => {
  const classes = useStyles();
  const { id } = useParams();
  const project = id && projects[+id];

  return (
    <div className={classes.root}>
      {project && (
        <article>
          <Typography variant="h5">{project.name}</Typography>

          <div className={classes.grid}>
            <div>
              <Typography className={classes.overview} variant="body1">
                {project.overview}
              </Typography>

              <div className={classes.detail}>
                <div>
                  <Typography variant="overline">Client</Typography>
                  <Typography variant="body2">{project.client}</Typography>
                </div>
                <div>
                  <Typography variant="overline">Date</Typography>
                  <Typography variant="body2">{project.date}</Typography>
                </div>
                <div>
                  <Typography variant="overline">Role</Typography>
                  <Typography variant="body2">{project.role}</Typography>
                </div>
              </div>
            </div>

            <div>
              {project.github && (
                <IconButton
                  url={project.github}
                  icon="/icons/github.png"
                  name="github"
                  margin={2}
                />
              )}
              <IconButton
                url={project.demo}
                icon="/icons/website.png"
                name="website"
              />
            </div>
          </div>

          <div className={classes.showcase}>
            {project.examples.map((example, index) => {
              const isVideo = example.split('.')[1] === 'mp4';
              return isVideo ? (
                <video key={index} autoPlay loop muted>
                  <source src={example} type="video/mp4" />
                </video>
              ) : (
                <img key={index} src={example} alt={project.name} />
              );
            })}
          </div>
        </article>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    color: 'white',
  },
  grid: {
    margin: theme.spacing(3, 0),
  },
  overview: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '500px',
    },
  },
  detail: {
    margin: theme.spacing(4, 0),
    display: 'flex',

    '& > div': {
      marginRight: theme.spacing(6),
    },

    '& span': {
      color: theme.palette.text.primaryLight,
    },

    '& p': {
      textTransform: 'capitalize',
    },
  },
  showcase: {
    margin: theme.spacing(8, 0),

    '& img, & video': {
      margin: theme.spacing(2, 0),
      width: '100%',
    },
  },
}));
