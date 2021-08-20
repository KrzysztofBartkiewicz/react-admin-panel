import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
  },
}));

const ItemContainer = ({ children, className }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={`${classes.root} ${className}`}>
      {children}
    </Paper>
  );
};

export default ItemContainer;
