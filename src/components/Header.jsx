import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Weather from './Weather';

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  borders: {
    borderBottom: '3px solid #FF7900',
    padding: '5px',
    fontSize: '26px',
  },
});

export default () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.borders}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Visualize Everything
        </Typography>
        <Weather />
      </Toolbar>
    </AppBar>
  );
};
