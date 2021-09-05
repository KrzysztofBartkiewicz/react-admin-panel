import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import FormInput from '../FormInput';
import Paragraph from '../../Paragraph';
import { Button } from '@material-ui/core';
import iconsTypes from '../../../helpers/iconsTypes';
import routes from '../../../router/routes';
import { AuthContext } from '../../../context';
import { useStyles } from './StyledLoginForm';
import { useContext } from 'react';

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const { signUpWithGoogle, logIn } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }, { resetForm }) => {
      logIn(email, password);
      resetForm();
    },
  });

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <FormInput
        name="email"
        value={formik.values.email}
        label="Email"
        onChange={formik.handleChange}
      />
      <FormInput
        name="password"
        value={formik.values.password}
        label="Password"
        onChange={formik.handleChange}
        type="password"
      />
      <div className={classes.btnWrapper}>
        <Button
          className={classes.loginBtn}
          variant="contained"
          color="primary"
          type="submit"
          size="large"
        >
          Login
        </Button>
        <Button
          onClick={signUpWithGoogle}
          variant="contained"
          color="secondary"
          size="large"
          startIcon={
            <iconsTypes.GoogleIcon style={{ width: '2rem', height: '2rem' }} />
          }
        >
          Login with google
        </Button>
      </div>
      <div className={classes.register}>
        <Paragraph>Don't have account?</Paragraph>
        <Button color="primary" onClick={() => history.push(routes.register)}>
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
