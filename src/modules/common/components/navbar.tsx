import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      textTransform: 'none'
    },
    avatar: {
      marginRight: theme.spacing(2)
    }
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Avatar alt={'mark ernest matute'} title={'mark ernest matute'} src={'/avatar.jpeg'} className={classes.avatar} />
          <Typography variant="h6" className={classes.title}>
            mark ernest matute
          </Typography>
          <Link href='/'>
            <Button color="inherit" className={classes.button}>
              01. home
            </Button>
          </Link>
          <Link href='/projects'>
            <Button color="inherit" className={classes.button}>
              02. projects
            </Button>
          </Link>
          <Link href='/skills'>
            <Button color="inherit" className={classes.button}>
              03. skills
            </Button>
          </Link>
          <Link href='/contact'>
            <Button color="inherit" className={classes.button} >
              04. contact
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
