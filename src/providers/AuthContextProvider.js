import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../context';
import { auth, provider } from '../firebase/firebaseConfig';
import { usersCollection } from '../firebase/firestoreUtils';
import { setCurrentUser } from '../redux/appReducer/actions';
import { getCurrentUser } from '../redux/appReducer/selectors';

const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  const signUpWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => {
        console.log('firebase: user sign in!', user);
      })
      .catch((err) => console.log('firebase :', err));
  };

  const logOut = () => {
    auth.signOut().then(() => console.log('firebase: logged out'));
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
        dispatch(setCurrentUser(null));
      }
    });

    return checkUser;
  }, []);

  const value = {
    logOut,
    signUpWithGoogle,
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
