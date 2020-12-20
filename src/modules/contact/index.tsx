import { Button, Card, CardActions, CardContent, CardHeader, createStyles, Grid, TextField, Theme, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Head from "next/head";
import React from "react";
import MainLayout from "../common/layouts/main";

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: 20
  },
  itemContainer: {
    padding: 10
  }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <MainLayout>
      <Head>
        <title>mark ernest matute - contact</title>
      </Head>
      <Grid container justify='center' className={classes.container}>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <Card style={{ padding: 20 }}>
            <CardHeader title={'contact form'} />
            <CardContent>
              <form noValidate autoComplete="off">
                <div>
                  <TextField id="standard-basic" label="first name" fullWidth />
                </div>
                <div>
                  <TextField id="standard-basic" label="last name" fullWidth />
                </div>
                <div>
                  <TextField id="standard-basic" label="email" fullWidth />
                </div>
                <div>
                  <TextField id="standard-basic" label="message" fullWidth multiline rows={6} />
                </div>
              </form>
            </CardContent>
            <CardActions>
              <Button variant={'contained'} fullWidth color={'primary'}>
                Send
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default Contact;
