import React from 'react';
import RegisterForm from '../../components/forms/RegisterForm';
import Background from '../../components/Background';
import {
  StyledLogo,
  StyledRegister,
  StyledRegisterPanel,
} from './StyledRegister';

const Register = () => {
  return (
    <StyledRegister>
      <StyledRegisterPanel>
        <StyledLogo color="grey" />
        <RegisterForm />
      </StyledRegisterPanel>
      <Background />
    </StyledRegister>
  );
};

export default Register;
