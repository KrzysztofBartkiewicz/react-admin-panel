import React from 'react';
import RegisterForm from '../../components/shared/RegisterForm';
import Background from '../../components/shared/Background';
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
