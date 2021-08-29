import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import Logo from '../../components/Logo';
import Paragraph from '../../components/Paragraph';
import {
  StyledLogin,
  StyledLoginPanel,
  StyledBg,
  StyledLogo,
  StyledBgInner,
  StyledHeading,
  StyledLogoWrapper,
} from './StyledLogin';

const Login = () => {
  return (
    <StyledLogin>
      <StyledLoginPanel>
        <StyledLogo color="grey" />
        <LoginForm />
      </StyledLoginPanel>
      <StyledBg>
        <StyledBgInner>
          <StyledLogoWrapper>
            <StyledHeading>Welcome to</StyledHeading>
            <Logo big />
          </StyledLogoWrapper>
          <Paragraph color="white" size="xl">
            Login to access Your account
          </Paragraph>
        </StyledBgInner>
      </StyledBg>
    </StyledLogin>
  );
};

export default Login;
