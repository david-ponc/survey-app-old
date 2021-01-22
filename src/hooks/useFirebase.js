import firebase from 'firebase/app'
import 'firebase/firestore'

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

  const getSurveys = async () => {
    const { docs } = await surveysColl.get()
    return docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
  }

  const getSurveysObserver = (callback) => {
    return surveysColl
      .onSnapshot(({ docs }) => {
        const surveys = docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
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

  const createSurvey = (name) => {
    return surveysColl.add({ name, survey: [] })
  }

  const publishSurvey = async (identifier, survey) => {
    console.log(identifier, survey)
    const doc = surveysColl.doc(identifier)
    return await doc.update({ survey: survey })
  }

  return {
    createSurvey,
    getSurveys,
    getSurveysObserver,
    getSurveyByIdentifier,
    publishSurvey
  }
}
