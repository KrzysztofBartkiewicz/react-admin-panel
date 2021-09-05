import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import Background from '../../components/Background';
import { StyledLogin, StyledLoginPanel, StyledLogo } from './StyledLogin';

const Login = () => {
  return (
    <StyledLogin>
      <StyledLoginPanel>
        <StyledLogo color="grey" />
        <LoginForm />
      </StyledLoginPanel>
      <Background />
    </StyledLogin>
  );
};

export default Login;
