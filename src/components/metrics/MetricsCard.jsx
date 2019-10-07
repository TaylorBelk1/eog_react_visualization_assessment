import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MetricsCardView from './MetricsCardView';
import { connect } from 'react-redux';

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

// this component needs to initially query getMeasurements and send it
// to redux so it will have a baseline set of data

const MetricsCard = (props) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);

    const handleClick = () => {
      console.log('Clicked', props.title);
      setShow(!show);
    }

    return (
        <Card className={classes.card} raised={true} onClick={() => handleClick()}>
            <CardContent>
                <Typography className={classes.title}>
                    {props.title}
                </Typography>
                {show ? <MetricsCardView title={props.title} /> : null}
            </CardContent>
        </Card>
    )
}

const mstp = state => {
  return {
  }
}

export default connect(null, {} )(MetricsCard)