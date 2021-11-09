import React from 'react';
import classes from './ErrorModul.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

export default Backdrop;
