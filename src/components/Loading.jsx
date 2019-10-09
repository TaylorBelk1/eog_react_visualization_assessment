import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LoadingWrap } from '../styled-components/loadingStyles';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <LoadingWrap>
      <CircularProgress className={classes.progress} />
    </LoadingWrap>
  );
};

export default Loading;
