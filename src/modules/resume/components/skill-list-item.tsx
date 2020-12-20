import { Box, createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import Rating from '@material-ui/lab/Rating';

interface ISkillListItemProps {
  label: string;
  rating: number;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  label: {
    fontSize: 12
  }
}));

export default function SkillListItem(props: ISkillListItemProps) {
  const { label, rating } = props;
  const classes = useStyles();
  return (
    <Grid item xs={2}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" className={classes.label}>{label}</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          size={'small'}
        />
      </Box>
    </Grid>
  );
}
