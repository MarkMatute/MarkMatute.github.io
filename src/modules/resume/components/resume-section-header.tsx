import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';

export interface IResumeSectionHeader {
  title: string;
  icon: any;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontWeight: 'bolder',
  },
  divider: {
    height: 25,
    width: 5,
    marginRight: 5,
    backgroundColor: '#122E50'
  }
}));

export default function ResumeSectionHeader(props: IResumeSectionHeader) {
  const { title, icon } = props;
  const classes = useStyles();

  return (
    <div className={classes.titleContainer}>
      <div className={classes.divider}></div>
      <Typography variant={'subtitle1'} className={classes.title}>
        {title}
      </Typography>
    </div>
  );
}
