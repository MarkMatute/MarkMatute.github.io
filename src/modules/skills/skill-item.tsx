import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader, Avatar, IconButton } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  avatar: {

  }
});

interface ISkillItemProps {
  name: string;
  image: string;
  rating: number;
}

const SkillItem = (props: ISkillItemProps) => {
  const classes = useStyles();
  const { name, image, rating } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label={name} alt={name} src={image} variant={'square'} />
          }
          title={name}
        />
        <CardContent>
          <Rating
            value={rating}
            size={'large'}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SkillItem;
