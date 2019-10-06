import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MetricsCardView from './MetricsCardView';
import { connect } from 'react-redux';
import { setShowMetricValues, setCurrentTabs } from '../../store/actions';

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

    const handleClick = () => {
      console.log('Clicked', props.title);
      setShowMetricValues(!props.viewMetricValue);
      setCurrentTabs(props.title);
    }

    return (
        <Card className={classes.card} raised={true} onClick={() => handleClick()}>
            <CardContent>
                <Typography className={classes.title}>
                    {props.title}
                </Typography>
                {props.viewMetricValue ? <MetricsCardView /> : null}
            </CardContent>
        </Card>
    )
}

const mstp = state => {
  return {
      data: state.data,
      viewMetricValue: state.viewMetricValue
  }
}

export default connect(mstp, { setCurrentTabs, setShowMetricValues })(MetricsCard)