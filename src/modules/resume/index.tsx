import MainLayout from "../common/layouts/main";
import Head from 'next/head';
import React from "react";
import { Button, Card, CardContent, createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import ResumeSectionHeader from "./components/resume-section-header";
import DescriptionIcon from '@material-ui/icons/Description'
import SectionListItem from './components/section-list-item';
import SkillListItem from "./components/skill-list-item";

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: theme.spacing(5)
  },
  name: {
    color: '#122E50',
    fontWeight: 'bolder',
    textAlign: 'center'
  },
  jobtitle: {
    textAlign: 'center'
  },
  cardContainer: {
    padding: theme.spacing(5)
  },
  summaryContainer: {
    margin: theme.spacing(2),
    marginLeft: 0,
    fontSize: 10
  },
  summary: {
    fontSize: theme.typography.fontSize
  },
  divider: {
    height: 2,
    backgroundColor: '#122E50'
  },
  sectionContainer: {
    marginTop: theme.spacing(5)
  },
  spacer: {
    height: theme.spacing(2)
  },
  softSkillLi: {
    display: 'inline-block',
    zoom: 1,
    margin: 10,
    '*display': 'inline',
  }
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <MainLayout>
      <Head>
        <title>mark ernest matute - resume</title>
      </Head>
      <Grid container alignItems='center' justify='center' className={classes.container}>
        <Grid item xs={8}>
          <Card elevation={8} className={classes.cardContainer}>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <div>
                    <Typography variant={'h4'} className={classes.name}>
                      mark ernest r. matute
                    </Typography>
                  </div>
                  <div>
                    <Typography variant={'h6'} className={classes.jobtitle}>
                      software engineer
                    </Typography>
                  </div>
                  <div className={classes.summaryContainer}>
                    <Typography variant={'caption'} className={classes.summary}>
                      ideas to reality, simplicity over fancy
                    </Typography>
                    <Typography variant={'subtitle1'} className={classes.summary}>
                      markernest.matute@gmail.com
                    </Typography>
                    <Typography variant={'subtitle1'} className={classes.summary}>
                      <a href='https://www.linkedin.com/in/mark-matute/'>https://www.linkedin.com/in/mark-matute/</a>
                    </Typography>
                    <Typography variant={'subtitle1'} className={classes.summary}>
                      <a href='https://github.com/MarkMatute'>https://github.com/MarkMatute</a>
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div className={classes.divider}></div>
                </Grid>

                {/* Soft Skills */}
                <Grid item xs={12} className={classes.sectionContainer}>
                  <ResumeSectionHeader title={'soft skills'} icon={<DescriptionIcon />} />
                  <div className={classes.spacer}></div>
                  <Grid container>
                    <ul>
                      <li className={classes.softSkillLi}>problem solving</li>
                      <li className={classes.softSkillLi}>planning</li>
                      <li className={classes.softSkillLi}>debugging</li>
                      <li className={classes.softSkillLi}>communication</li>
                      <li className={classes.softSkillLi}>time management</li>
                      <li className={classes.softSkillLi}>teamwork</li>
                      <li className={classes.softSkillLi}>#1 simplicity</li>
                    </ul>
                  </Grid>
                </Grid>

                {/* Technical Skills */}
                <Grid item xs={12} className={classes.sectionContainer}>
                  <ResumeSectionHeader title={'technical skills'} icon={<DescriptionIcon />} />
                  <div className={classes.spacer}></div>
                  <Grid container>
                    <SkillListItem label={'javascript'} rating={4} />
                    <SkillListItem label={'typescript'} rating={4} />
                    <SkillListItem label={'nodejs'} rating={4} />
                    <SkillListItem label={'react & redux'} rating={4} />
                    <SkillListItem label={'react native'} rating={4} />
                    <SkillListItem label={'mocha, chai, jest, jmeter'} rating={4} />
                    <SkillListItem label={'htmk & css'} rating={4} />
                    <SkillListItem label={'mysql'} rating={4} />
                    <SkillListItem label={'git'} rating={4} />
                    <SkillListItem label={'mongodb'} rating={3} />
                    <SkillListItem label={'docker'} rating={3} />
                    <SkillListItem label={'aws'} rating={3} />
                  </Grid>
                </Grid>

                {/* Experience */}
                <Grid item xs={12} className={classes.sectionContainer}>
                  <ResumeSectionHeader title={'experiences'} icon={<DescriptionIcon />} />
                  <div className={classes.spacer}></div>
                  <SectionListItem
                    yearTitle={'healthbeats'}
                    year={'2019 - present'}
                    descriptionTitle={'software engineer - singapore'}
                    descriptionList={[
                      'develop remote patient monitoring platform at scale',
                      'build complex requirements, asses risks and prioritize features',
                      'monitor production issues,  make sure issues are resolved within kpi',
                      'managed all tasks, integrations and deployments with precision',
                      'create features, resolve bugs with quality and in time',
                      'mentor team members / review code changes',
                      'javascript, typescript, react, react native, nodejs, aws, docker, jenkins, mysql, mongodb'
                    ]} />
                  <SectionListItem
                    yearTitle={'ihealth labs'}
                    year={'2018 - 2019'}
                    descriptionTitle={'software engineer - singapore'}
                    descriptionList={[
                      'develop remote patient monitoring platform for duke nus, duke-nus wifhy',
                      'build features, fix bugs, deploy and support duke nus until completion',
                      'develop diabetes monitoring platform, unified care',
                      'build features, fix bugs for unified care platform',
                      'javascript, typescript, react, react native, nodejs, aws, docker, jenkins, mysql, mongodb'
                    ]} />
                  <SectionListItem
                    yearTitle={'isbx inc'}
                    year={'2017 - 2018'}
                    descriptionTitle={'fullstack developer - philippines'}
                    descriptionList={[
                      'develop a remote consultation platform, direct dermatology',
                      'build features, fix bugs, deploy and support direct dermatology',
                      'javascript, angularjs, nodejs, mysql'
                    ]} />
                  <SectionListItem
                    yearTitle={'eacomm corp'}
                    year={'2016 - 2017'}
                    descriptionTitle={'software developer - philippines'}
                    descriptionList={[
                      'develop a gps powered, real-time monitoring software that was installed on all metro-manila busses, dotc realtime-monitoring',
                      'develop philippines\'s larges companies directory website, philippine companies',
                      'develop website for filipino veterans, pvao website',
                      'javascript, nodejs, php, mysql, mongodb'
                    ]} />
                  <SectionListItem
                    yearTitle={'freelance projects'}
                    year={'present'}
                    descriptionTitle={'software engineer - freelance'}
                    descriptionList={[
                      'news video streaming app, vns',
                      'contracts monitoring software, ipsystems',
                      'javascript, typescript, react, react native, nodejs, aws, docker, jenkins, mysql, mongodb'
                    ]} />
                  <SectionListItem
                    yearTitle={'open source projects'}
                    year={'present'}
                    descriptionTitle={'software engineer - open source'}
                    descriptionList={[
                      'base-express, typescript-express boilerplate',
                      'base-next, typescript-next boilerplate',
                      'simple-ts, typescript boilerplate'
                    ]} />
                </Grid>

                {/* Education */}
                <Grid item xs={12} className={classes.sectionContainer}>
                  <ResumeSectionHeader title={'education'} icon={<DescriptionIcon />} />
                  <div className={classes.spacer}></div>
                  <SectionListItem
                    yearTitle={'bulacan state university'}
                    year={'2012 - 2016'}
                    descriptionTitle={'b.s. information & communications technology'}
                    descriptionList={[
                      'dean\'s lister',
                      'best thesis candidate'
                    ]} />
                  <SectionListItem
                    yearTitle={'holy spirit academy of malolos'}
                    year={'2007 - 2011'}
                    descriptionTitle={'secondary education'} />
                  <SectionListItem
                    yearTitle={'holy spirit academy of malolos'}
                    year={'2001 - 2007'}
                    descriptionTitle={'primary education'} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
