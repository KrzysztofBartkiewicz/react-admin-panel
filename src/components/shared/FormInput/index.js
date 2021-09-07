import React from 'react';
import { TextField } from '@material-ui/core';
import { StyledErrorMsg, useStyles } from './StyledFormInput';

const FormInput = ({ value, label, errorMsg, name, onChange, type }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <TextField
        value={value}
        label={label}
        name={name}
        variant="filled"
        onChange={onChange}
        type={type}
      />
      {errorMsg && <StyledErrorMsg>{errorMsg}</StyledErrorMsg>}
    </div>
  );
};

export default FormInput;
