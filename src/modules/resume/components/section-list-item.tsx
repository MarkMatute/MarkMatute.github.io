import { createStyles, Grid, List, ListItem, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

export interface ISectionListItemProps {
  yearTitle?: string;
  year?: string;
  descriptionTitle?: string;
  description?: string;
  descriptionList?: string[];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    margin: theme.spacing(2)
  },
  sectionText:  {
    fontSize: 20
  },
  yearTitle: {
    textAlign: 'right',
    marginRight: theme.spacing(5)
  },
  year: {
    fontStyle: 'italic',
    fontSize: 14,
    textAlign: 'right',
    marginRight: theme.spacing(5)
  },
  descriptionTitle: {
    fontWeight: 'bolder'
  },
  description: {

  }
}));

export default function SectionListItem(props: ISectionListItemProps) {
  const { yearTitle, year, descriptionTitle, description, descriptionList } = props;
  const classes = useStyles();

  const DescriptionList = () => {
    return (
      <ul>
        {
          descriptionList.map((description) => (
            <li key={description}>
              <Typography>
                {description}
              </Typography>
            </li>
          ))
        }
      </ul>
    );
  }

  return (
    <Grid container className={classes.container}>
      <Grid item xs={4}>
        <Typography className={(classes.sectionText, classes.yearTitle)}>
          {yearTitle}
        </Typography>
        <Typography className={(classes.sectionText, classes.year)}>
          {year}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography className={(classes.sectionText, classes.descriptionTitle)}>
          {descriptionTitle}
        </Typography>
        <Typography className={(classes.sectionText, classes.description)}>
          {descriptionList ? <DescriptionList />: description}
        </Typography>
      </Grid>
    </Grid>
  );
}
