export const signIn = (credential) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
      credential.email,
      credential.password
    ).then(() => {
      dispatch({
        type: "LOGIN_SUCCESS"
      })
    }
    ).catch(error => {
      dispatch({
        type: "LOGIN_ERROR",
        error
      })
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(
      dispatch({
        type: "LOGOUT"
      })
    )
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      firestore.collection('userList').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        initials: newUser.firstName[0] + newUser.lastName[0],
        address: '',
        role: 'Member',
        event_enrolment: []
      }).then(() =>{
        dispatch({
          type: "SIGN_UP_SUCCESS"
        })
      }).catch(error => {
        dispatch({
          type: "SIGN_UP_ERROR",
          error
        })
      })
    })
  }
}