/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import MetricsCardView from './MetricsCardView';
import * as actions from '../../store/actions';

const useStyles = makeStyles({
  card: {
    width: 200,
    height: 60,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 550,
  },
});

const MetricsCard = props => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { title } = props;

  const handleClick = () => {
    setShow(!show);
    props.handleShow();
    if (!show) {
      dispatch({
        type: actions.SET_SELECTED_DATA,
        payload: title,
      });
    } else if (show) {
      dispatch({
        type: actions.REMOVE_SELECTED_DATA,
        payload: title,
      });
    }
  };

  return (
    <Card className={classes.card} raised={true} onClick={() => handleClick()}>
      <CardContent>
        <Typography className={classes.title}>{title}</Typography>
        {show ? <MetricsCardView title={title} /> : null}
      </CardContent>
    </Card>
  );
};

export default MetricsCard;

MetricsCard.propTypes = {
  title: PropTypes.string.isRequired,
  handleShow: PropTypes.func.isRequired,
};
