import { createStyles, Grid, Theme, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Head from "next/head";
import React from "react";
import MainLayout from "../common/layouts/main";
import ProjectItem from "./components/project-item";

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: 20
  },
  itemContainer: {
    padding: 10
  }
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <MainLayout>
      <Head>
        <title>mark ernest matute - projects</title>
      </Head>
      <Grid container justify='center' className={classes.container}>
        <Grid item xs={12} className={classes.itemContainer}>
          <Typography variant={'subtitle1'}>
            only selected projects shown
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.itemContainer}>
          <ProjectItem
            name={'healthbeats platform'}
            image={'/projects/healthbeats_1.png'}
            description={'remote patient monitoring platform'}
          />
        </Grid>
        <Grid item xs={3} className={classes.itemContainer}>
          <ProjectItem
            name={'video news service - vns'}
            image={'/projects/vns_mob_1.PNG'}
            description={'video streaming application'}
          />
        </Grid>
        <Grid item xs={3} className={classes.itemContainer}>
          <ProjectItem
            name={'unified care'}
            image={'/projects/unified_care_1.png'}
            description={'diabetes monitoring platform'}
          />
        </Grid>
        <Grid item xs={3} className={classes.itemContainer}>
          <ProjectItem
            name={'duke nus wifhy'}
            image={'/projects/duke_1.png'}
            description={'hypertension monitoring platform'}
          />
        </Grid>
        <Grid item xs={3} className={classes.itemContainer}>
          <ProjectItem
            name={'direct dermatology'}
            image={'/projects/dd_1.png'}
            description={'remote consultation platform'}
          />
        </Grid>
        <Grid item xs={3} className={classes.itemContainer}>
          <ProjectItem
            name={'ipsystems'}
            image={'/projects/ipsystems_1.png'}
            description={'contract management system'}
          />
        </Grid>
        <Grid item xs={3} className={classes.itemContainer}>
          <ProjectItem
            name={'philippine companies'}
            image={'/projects/philcomp_1.jpeg'}
            description={'companies directory website'}
          />
        </Grid>
        <Grid item xs={3} className={classes.itemContainer}>
          <ProjectItem
            name={'dotc realtime visualization'}
            image={'/projects/dotc_1.jpeg'}
            description={'companies directory website'}
          />
        </Grid>
        <Grid item xs={3} className={classes.itemContainer}>
          <ProjectItem
            name={'base-next'}
            image={'/projects/nextjs.png'}
            description={'typescript, nextjs, material-ui boilerplate'}
          />
        </Grid>
        <Grid item xs={3} className={classes.itemContainer}>
          <ProjectItem
            name={'base-express'}
            image={'/projects/express.png'}
            description={'typescript, expressjs, mysql boilerplate'}
          />
        </Grid>
        <Grid item xs={3} className={classes.itemContainer}>
          <ProjectItem
            name={'simple-ts'}
            image={'/projects/typescript.jpeg'}
            description={'typescript boilerplate'}
          />
        </Grid>
      </Grid>
    </MainLayout >
  );
}

export default Projects;
