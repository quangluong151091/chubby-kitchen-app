import axios from 'axios';

const API_PATH = 'https://www.some-server.com/~e1500949/php/chubbykitchen/enrollConfirm.php';

export const updateInfo = (profile) => {
  return (dispatch, getState, { getFirebase , getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('userList').doc(profile.userId).update({
      firstName: profile.firstName,
      lastName: profile.lastName,
      initials: profile.firstName[0] + profile.lastName[0],
      address: profile.address
    }).then(() => {
      dispatch({
        type: "UPDATE_SUCCESS"
      })
    }).catch(error => {
      dispatch({
        type: "UPDATE_ERROR",
        error
      })
    })
  }
}

export const enrollEvent = (enrollment) => {
  return (dispatch, getState, { getFirebase , getFirestore }) => {
    const firestore = getFirestore();
    // console.log(enrollment)
    firestore.collection('eventList').doc(enrollment.eventId).update({
      user_enrolment: enrollment.userEnroll
    }).then(
      firestore.collection('userList').doc(enrollment.userId).update({
        event_enrolment: enrollment.userEventList
      })
    ) 

    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: enrollment
    }).then( result => console.log(result.data)
    )
  }
}

export const cancelEnrollEvent = (cancelEnrollment) => {
  return (dispatch, getState, { getFirebase , getFirestore }) => {
    const firestore = getFirestore();
    // console.log(cancelEnrollment)
    firestore.collection('eventList').doc(cancelEnrollment.eventId).update({
      user_enrolment: cancelEnrollment.userEnroll
    }).then(
      firestore.collection('userList').doc(cancelEnrollment.userId).update({
        event_enrolment: cancelEnrollment.userEventList
      })
    )
  }
}