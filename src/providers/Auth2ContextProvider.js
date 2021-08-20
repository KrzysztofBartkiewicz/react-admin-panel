import React, { useState, useEffect } from 'react';
import Auth2Context from '../context/Auth2Context';

const gapi = window.gapi;

const Auth2ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signIn = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    if (auth2.isSignedIn.get()) {
      console.log('already signed in');
      return;
    }

    auth2.signIn().catch((error) => {
      console.error(`sign in error: ${error}`);
    });
  };

  const signOut = () => {
    console.log('signing out...');
    const auth2 = gapi.auth2.getAuthInstance();
    if (!auth2.isSignedIn.get()) {
      console.log('Not signed in!');
      return;
    }

    auth2.signOut().then(() => {
      console.log('gapi: sign out complete');
    });
  };

  const updateSignIn = (isSignIn) => {
    if (isSignIn) {
      const auth2 = gapi.auth2.getAuthInstance();
      const currentUser = auth2.currentUser.get();
      const profile = currentUser.getBasicProfile();

      const user = {
        id: profile.getId(),
        name: profile.getName(),
        email: profile.getEmail(),
        surname: profile.getFamilyName(),
      };
      setCurrentUser(user);
      console.log('gapi: user signed in!');
    } else {
      setCurrentUser(null);
      console.log('gapi: user signed out');
    }
  };

  useEffect(() => {
    const init = () => {
      gapi.load('client:auth2', initClient);
    };

    const initClient = () => {
      gapi.client
        .init({
          apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest',
          ],
          scope: 'https://www.googleapis.com/auth/gmail.compose',
        })
        .then(() => console.log('gapi: client initialized'))
        .then(() => {
          const auth2 = gapi.auth2.getAuthInstance();
          auth2.isSignedIn.listen(updateSignIn);
          updateSignIn(auth2.isSignedIn.get());
        })

        .catch((err) => console.log(err));
    };

    init();
  }, []);

  const value = { currentUser, signIn, signOut };

  return (
    <Auth2Context.Provider value={value}>{children}</Auth2Context.Provider>
  );
};

export default Auth2ContextProvider;
