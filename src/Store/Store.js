import thunk from 'redux-thunk';
import { firebase } from '../firebaseDB/db'
import { applyMiddleware, compose } from 'redux';
import authReducer from './Reducers/authReducer';
import eventReducer from './Reducers/eventReducer';
import archiveReducer from './Reducers/archiveReducer';
import { reactReduxFirebase, getFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, getFirestore , firestoreReducer } from 'redux-firestore';

var redux = require('redux');

const allReducer = redux.combineReducers({
  auth: authReducer,
  event: eventReducer,
  archive: archiveReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

const firebaseReduxConfig = {
  useFirestoreForProfile: true,
  userProfile: 'userList',
  attachAuthIsReady: true
}

var store = redux.createStore(allReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, firebaseReduxConfig)
  )
);

export default store;