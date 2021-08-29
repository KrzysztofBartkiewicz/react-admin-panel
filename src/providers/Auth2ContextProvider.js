import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Auth2Context, AuthContext } from '../context';
import { setAdminUser } from '../redux/appReducer/actions';
import { getAdminUser } from '../redux/appReducer/selectors';

const gapi = window.gapi;

const Auth2ContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const adminUser = useSelector(getAdminUser);
  const { currentUser } = useContext(AuthContext);

  const gapiLogIn = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    if (auth2.isSignedIn.get()) {
      console.log('already signed in');
      return;
    }

    auth2.signIn().catch((error) => {
      console.error(`gapi: sign in error: ${error}`);
    });
  };

  const gapiLogOut = () => {
    console.log('signing out...');
    const auth2 = gapi.auth2.getAuthInstance();
    if (!auth2.isSignedIn.get()) {
      console.log('gapi: not signed in!');
      return;
    }

    auth2.signOut().then(() => {
      console.log('gapi: sign out complete');
    });
  };

  const updateSignIn = (isSignIn) => {
    if (isSignIn) {
      const auth2 = gapi.auth2.getAuthInstance();
      const user = auth2.currentUser.get();
      const profile = user.getBasicProfile();

      const userData = {
        id: profile.getId(),
        name: profile.getName(),
        email: profile.getEmail(),
        surname: profile.getFamilyName(),
      };

      dispatch(setAdminUser(userData));
      console.log('gapi: user signed in!');
    } else {
      dispatch(setAdminUser(null));
      console.log('gapi: user signed out');
    }
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
          clientId: currentUser.adminKey,
          discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest',
          ],
          scope:
            'https://mail.google.com/ https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.compose',
        })
        .then(() => console.log('gapi: client initialized'))
        .then(() => {
          const auth2 = gapi.auth2.getAuthInstance();
          auth2.isSignedIn.listen(updateSignIn);
          updateSignIn(auth2.isSignedIn.get());
        })
        .catch((err) => console.log(err));
    };

    if (currentUser && currentUser.adminKey) {
      gapi && gapi.load('client:auth2', initClient);
    }
  }, [currentUser, gapi]);

  const value = { gapiLogIn, gapiLogOut, adminUser, gapiLogIn };
  return (
    <Auth2Context.Provider value={value}>{children}</Auth2Context.Provider>
  );
};

export default Auth2ContextProvider;
