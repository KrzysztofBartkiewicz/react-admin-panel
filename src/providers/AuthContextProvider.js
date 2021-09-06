import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../context';
import { auth, provider } from '../firebase/firebaseConfig';
import { usersCollection } from '../firebase/firestoreUtils';
import { setCurrentUser } from '../redux/appReducer/actions';
import { getCurrentUser } from '../redux/appReducer/selectors';

const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  const [loginError, setLoginError] = useState(null);

  const signUp = (email, password, firstName, lastName) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) =>
        usersCollection
          .doc(user.user.uid)
          .set({
            email,
            firstName,
            lastName,
            password,
          })
          .then((user) => console.log('firestore: user created!', user))
          .catch((err) => console.log('firestore: user creation error: ', err))
      )
      .then((user) => console.log('firebase: user created!', user))
      .catch((err) => console.log('firebase: user creation error: ', err));
  };

  const signUpWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => {
        console.log('firebase: user sign in!', user);
      })
      .catch((err) => console.log('firebase :', err));
  };

  // const logIn = (email, password) =>
  //   new Promise((resolve, reject) => {
  //     auth
  //       .signInWithEmailAndPassword(email, password)
  //       .then((user) => {
  //         console.log('firebase: user sign in!', user);
  //         resolve(user);
  //       })
  //       .catch((err) => {
  //         console.log('firebase login error:', err);
  //         reject(err);
  //       });
  //   });

  const logIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('firebase: user sign in!', user);
        setLoginError(null);
      })
      .catch((err) => {
        console.log('firebase login error:', err);
        setLoginError(err);
      });
  };

  const logOut = () => {
    auth
      .signOut()
      .then(() => window.location.reload())
      .then(() => console.log('firebase: logged out'));
  };

  useEffect(() => {
    const checkUser = auth.onAuthStateChanged((user) => {
      if (user) {
        const userDoc = usersCollection.doc(user.uid);
        userDoc.get().then((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            const userProfile = {
              id: user.uid,
              email: userData.email,
              firstName: userData.firstName,
              lastName: userData.lastName,
              adminKey: userData.adminKey,
            };

            dispatch(setCurrentUser(userProfile));
          }
        });
      } else {
        dispatch(setCurrentUser('signedout'));
      }
    });

    return checkUser;
  }, []);

  const value = {
    logOut,
    logIn,
    signUp,
    signUpWithGoogle,
    loginError,
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
