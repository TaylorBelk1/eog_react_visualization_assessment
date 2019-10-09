import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MetricsCardView from './MetricsCardView';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';

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

const getLineGraphStatus = state => {
  const { viewLineGraph } = state.measurementReducer.viewLineGraph;
  return { viewLineGraph };
}

const MetricsCard = (props) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const { viewLineGraph } = useSelector(getLineGraphStatus);

    const handleClick = () => {
      setShow(!show);
      props.handleShow();
      if(!show) {
        dispatch({
          type: actions.SET_SELECTED_DATA,
          payload: props.title,
        });
      } else if(show) {
        dispatch({
          type: actions.REMOVE_SELECTED_DATA,
          payload: props.title,
        })
      }
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

export default MetricsCard