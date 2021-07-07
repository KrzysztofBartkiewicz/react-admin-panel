import React from 'react';
import GlobalStylesTemplate from '../templates/GlobalStylesTemplate';
import Router from '../router';

const App = () => {
  return (
    <GlobalStylesTemplate>
      <Router />
    </GlobalStylesTemplate>
  );
};

export default App;
