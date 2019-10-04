import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 200,
    height: 60,
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: 550
  }
});

const MetricsCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} raised={true}>
            <CardContent>
                <Typography className={classes.title}>
                    { props.title }
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MetricsCard