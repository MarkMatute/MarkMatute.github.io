import { createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import MainLayout from "../common/layouts/main";
import Head from 'next/head';
import SkillItem from './skill-item';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: 20
  },
  itemContainer: {
    padding: 10
  }
}));

const skills = [
  {
    name: 'javascript',
    image: '/skills/js.jpg',
    rating: 4
  },
  {
    name: 'html & css',
    image: '/skills/html.png',
    rating: 4
  },
  {
    name: 'typescript',
    image: '/skills/ts.png',
    rating: 4
  },
  {
    name: 'nodejs',
    image: '/skills/nodejs.png',
    rating: 4
  },
  {
    name: 'expressjs',
    image: '/skills/express.png',
    rating: 4
  },
  {
    name: 'react & redux',
    image: '/skills/react.png',
    rating: 4
  },
  {
    name: 'react native',
    image: '/skills/reactnative.png',
    rating: 4
  },
  {
    name: 'mocha & chai',
    image: '/skills/mocha.png',
    rating: 4
  },
  {
    name: 'jmeter',
    image: '/skills/jmeter.jpeg',
    rating: 4
  },
  {
    name: 'mysql',
    image: '/skills/mysql.png',
    rating: 4
  },
  {
    name: 'git',
    image: '/skills/git.png',
    rating: 4
  },
  {
    name: 'mongodb',
    image: '/skills/mongodb.png',
    rating: 3
  },
  {
    name: 'docker',
    image: '/skills/docker.png',
    rating: 3
  },
  {
    name: 'aws',
    image: '/skills/aws.png',
    rating: 3
  },
];

const Skills = (props) => {
  const classes = useStyles();
  return (
    <MainLayout>
      <Head>
        <title>mark ernest matute - skills</title>
      </Head>
      <Grid container justify='center' className={classes.container}>
        <Grid item xs={12} className={classes.itemContainer}>
          <Typography variant={'subtitle1'}>
            only selected skills are shown
          </Typography>
        </Grid>
        {
          skills.map(skill => (
            <Grid item xs={2} className={classes.itemContainer}>
              <SkillItem
                name={skill.name}
                image={skill.image}
                rating={skill.rating}
              />
            </Grid>
          ))
        }
      </Grid>
    </MainLayout>
  );
}

export default Skills;
