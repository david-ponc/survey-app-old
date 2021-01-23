import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyANVnjAx_N3fKg0L0tPHaaPV9DwaMahmdo',
  authDomain: 'survey-app-d5bb2.firebaseapp.com',
  databaseURL: 'https://survey-app-d5bb2-default-rtdb.firebaseio.com',
  projectId: 'survey-app-d5bb2',
  storageBucket: 'survey-app-d5bb2.appspot.com',
  messagingSenderId: '1039722329183',
  appId: '1:1039722329183:web:fbc20717f18067c30157ea',
  measurementId: 'G-JW6TSFXNXL'
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export default function useFirebase () {
  const surveysColl = firebase.firestore().collection('/surveys')

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
  }

  const onAuthStateChanged = (callback) => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback(user)
      } else {
        console.log('The user is not logged in')
      }
    })
  }

  const getSurveys = async (userId) => {
    const { docs } = await surveysColl.get()
    const allSurveys = docs.map(doc => { return { id: doc.id, ...doc.data() } })
    return allSurveys.filter(survey => survey.user === userId)
  }

  const getSurveysObserver = (callback, userId) => {
    return surveysColl
      .onSnapshot(({ docs }) => {
        const allSurveys = docs.map(doc => { return { id: doc.id, ...doc.data() } })
        const surveys = allSurveys.filter(survey => survey.user === userId)
        callback(surveys)
        return surveys
      })
  }

  const getSurveyByIdentifier = async (identifier) => {
    const doc = await surveysColl
      .doc(identifier)
      .get()
    return { id: doc.id, ...doc.data() }
  }

  const createSurvey = (name, userId) => {
    return surveysColl.add({ name, user: userId, survey: [] })
  }

  const publishSurvey = async (identifier, survey) => {
    const doc = surveysColl.doc(identifier)
    return await doc.update({ survey: survey })
  }

  return {
    createSurvey,
    getSurveys,
    getSurveysObserver,
    getSurveyByIdentifier,
    publishSurvey,
    onAuthStateChanged,
    loginWithGoogle
  }
}
