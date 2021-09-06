import React from 'react';
import FormInput from '../FormInput';
import Paragraph from '../../Paragraph';
import { Button } from '@material-ui/core';
import iconsTypes from '../../../helpers/iconsTypes';
import routes from '../../../router/routes';
import { AuthContext } from '../../../context';
import { useFormik } from 'formik';
import { signUpSchema } from '../validation';
import { useStyles } from './StyledRegisterForm';
import { useContext } from 'react';
import { useHistory } from 'react-router';

const RegisterForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const { signUp, signUpWithGoogle } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: ({ email, password, firstName, lastName }, { resetForm }) => {
      signUp(email, password, firstName, lastName);
      resetForm();
    },
    validationSchema: signUpSchema,
  });

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <FormInput
        name="firstName"
        value={formik.values.firstName}
        label="First Name"
        onChange={formik.handleChange}
        errorMsg={formik.errors.firstName}
      />
      <FormInput
        name="lastName"
        value={formik.values.lastName}
        label="LastName"
        onChange={formik.handleChange}
        errorMsg={formik.errors.lastName}
      />
      <FormInput
        name="email"
        value={formik.values.email}
        label="Email"
        onChange={formik.handleChange}
        errorMsg={formik.errors.email}
      />
      <FormInput
        name="password"
        value={formik.values.password}
        label="Password"
        onChange={formik.handleChange}
        type="password"
        errorMsg={formik.errors.password}
      />
      <FormInput
        name="confirmPassword"
        value={formik.values.confirmPassword}
        label="Confirm Password"
        onChange={formik.handleChange}
        type="password"
        errorMsg={formik.errors.confirmPassword}
      />
      <div className={classes.btnWrapper}>
        <Button
          className={classes.loginBtn}
          variant="contained"
          color="primary"
          type="submit"
          size="large"
        >
          Sign Up
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
      <div className={classes.login}>
        <Paragraph>Allready have account?</Paragraph>
        <Button color="primary" onClick={() => history.push(routes.login)}>
          Log in
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
